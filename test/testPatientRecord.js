const {
  constants,
  expectEvent,
  expectRevert,
  ether,
  BN,
} = require("@openzeppelin/test-helpers");
const { ZERO_ADDRESS } = constants;

const { expect } = require("chai");

const PatientRecord = artifacts.require("PatientRecord");

contract("PatientRecord", function (accounts) {
  const [owner, patient1, patient2, requester1, notOwner] = accounts;

  beforeEach(async function () {
    this.PatientRecord = await PatientRecord.new({ from: owner });
  });

  describe("Admin functions", function () {
    it("register patient", async function () {
      const receipt = await this.PatientRecord.registerPatient(
        patient1,
        "Region1",
        web3.utils.asciiToHex("age-range"),
        1,
        { from: owner }
      );
      expectEvent(receipt, "PatientRegistered");
    });

    it("register requester", async function () {
      const receipt = await this.PatientRecord.registerRequester(
        requester1,
        1,
        web3.utils.asciiToHex("doctor1"),
        "Region1",
        { from: owner }
      );
      expectEvent(receipt, "requesterRegistered");
    });
  });

  describe("medical Records functions", function () {
    it("patient creates a medical record", async function () {
      await this.PatientRecord.registerPatient(
        patient2,
        "Region1",
        web3.utils.asciiToHex("age-range"),
        1,
        { from: owner }
      );
      const receipt = await this.PatientRecord.createMedicalRecord(
        "IPFSHASH",
        "Memo",
        ether("0.1"),
        { from: patient2 }
      );
      expectEvent(receipt, "medicalRecordCreated");
    });
    it("requester buys a medical record", async function () {
      const balance1 = await this.PatientRecord.balanceOf(patient2);

      await this.PatientRecord.registerPatient(
        patient2,
        "Region1",
        web3.utils.asciiToHex("age-range"),
        1,
        { from: owner }
      );
      await this.PatientRecord.registerRequester(
        requester1,
        1,
        web3.utils.asciiToHex("doctor1"),
        "Region1",
        { from: owner }
      );
      await this.PatientRecord.createMedicalRecord(
        "IPFSHASH",
        "Memo",
        ether("0.1"),
        { from: patient2 }
      );
      const receipt = await this.PatientRecord.BuyMedicalRecord(0, {
        from: requester1,
        value: ether("0.1"),
      });
      expectEvent(receipt, "medicalRecordPurchased");
      const balance2 = await this.PatientRecord.balanceOf(patient2);

      expect(new BN(balance2) - ether("0.1")).to.equal(
        new BN(balance1).toNumber()
      );
    });

    it("patient withdraw funds", async function () {
      await this.PatientRecord.registerPatient(
        patient2,
        "Region1",
        web3.utils.asciiToHex("age-range"),
        1,
        { from: owner }
      );
      await this.PatientRecord.registerRequester(
        requester1,
        1,
        web3.utils.asciiToHex("doctor1"),
        "Region1",
        { from: owner }
      );
      await this.PatientRecord.createMedicalRecord(
        "IPFSHASH",
        "Memo",
        ether("0.1"),
        { from: patient2 }
      );
      const balance1 = new BN(
        web3.utils.fromWei(await web3.eth.getBalance(patient2), "ether")
      );
      await this.PatientRecord.BuyMedicalRecord(0, {
        from: requester1,
        value: ether("0.1"),
      });
      await this.PatientRecord.Withdraw(ether("0.1"), { from: patient2 });
      const balance2 = new BN(
        web3.utils.fromWei(await web3.eth.getBalance(patient2), "ether")
      );
      expect(new BN(balance2).toNumber()).to.greaterThan(
        new BN(balance1).toNumber()
      );
    });
  });

  describe("Exceptions Tests", function () {
    it("Exception: only owner can register patient", async function () {
      await expectRevert(
        this.PatientRecord.registerPatient(
          patient1,
          "Region1",
          web3.utils.asciiToHex("age-range"),
          1,
          { from: notOwner }
        ),
        "Ownable: caller is not the owner"
      );
    });

    it("Exception: can not register patient  zero address", async function () {
      await expectRevert(
        this.PatientRecord.registerPatient(
          ZERO_ADDRESS,
          "Region1",
          web3.utils.asciiToHex("age-range"),
          1,
          { from: owner }
        ),
        "PatientRecord:Zero address"
      );
    });
    it("Exception: only owner can register requester", async function () {
      await expectRevert(
        this.PatientRecord.registerRequester(
          requester1,
          1,
          web3.utils.asciiToHex("doctor1"),
          "Region1",
          { from: notOwner }
        ),
        "Ownable: caller is not the owner"
      );
    });

    it("Exception: can not register requester  zero address", async function () {
      await expectRevert(
        this.PatientRecord.registerRequester(
          ZERO_ADDRESS,
          1,
          web3.utils.asciiToHex("doctor1"),
          "Region1",
          { from: owner }
        ),
        "PatientRecord:Zero address"
      );
    });

    it("Exception: only registered patient creates medical record", async function () {
      await expectRevert(
        this.PatientRecord.createMedicalRecord(
          "IPFSHASH",
          "Memo",
          ether("0.1"),
          {
            from: patient2,
          }
        ),
        "PatientRecord:Only patient"
      );
    });

    it("Exception: create medical record price should be greater than 0", async function () {
      await this.PatientRecord.registerPatient(
        patient2,
        "Region1",
        web3.utils.asciiToHex("age-range"),
        1,
        { from: owner }
      );

      await expectRevert(
        this.PatientRecord.createMedicalRecord("IPFSHASH", "Memo", ether("0"), {
          from: patient2,
        }),
        "PatientRecord:Price is Zero"
      );
    });

    it("Exception: only requester buys a medical record", async function () {
      await this.PatientRecord.registerPatient(
        patient2,
        "Region1",
        web3.utils.asciiToHex("age-range"),
        1,
        { from: owner }
      );
      /* await this.PatientRecord.registerRequester(
        requester1,
        1,
        web3.utils.asciiToHex("doctor1"),
        "Region1",
        { from: owner }
      ); */
      await this.PatientRecord.createMedicalRecord(
        "IPFSHASH",
        "Memo",
        ether("0.1"),
        { from: patient2 }
      );

      await expectRevert(
        this.PatientRecord.BuyMedicalRecord(0, {
          from: requester1,
          value: ether("0.1"),
        }),
        "PatientRecord:Only rquester"
      );
    });

    it("Exception: buy medical record paid enough", async function () {
      await this.PatientRecord.registerPatient(
        patient2,
        "Region1",
        web3.utils.asciiToHex("age-range"),
        1,
        { from: owner }
      );
      await this.PatientRecord.registerRequester(
        requester1,
        1,
        web3.utils.asciiToHex("doctor1"),
        "Region1",
        { from: owner }
      );
      await this.PatientRecord.createMedicalRecord(
        "IPFSHASH",
        "Memo",
        ether("0.1"),
        { from: patient2 }
      );

      await expectRevert(
        this.PatientRecord.BuyMedicalRecord(0, {
          from: requester1,
          value: ether("0.01"),
        }),
        "PatientRecord:not enough"
      );
    });

    it("Exception: not exist medical record", async function () {
      await this.PatientRecord.registerRequester(
        requester1,
        1,
        web3.utils.asciiToHex("doctor1"),
        "Region1",
        { from: owner }
      );

      await expectRevert(
        this.PatientRecord.BuyMedicalRecord(0, {
          from: requester1,
          value: ether("0.01"),
        }),
        "PatientRecord:Record not exisit"
      );
    });

    it("Exception: can not buy medical record more than once", async function () {
      await this.PatientRecord.registerPatient(
        patient2,
        "Region1",
        web3.utils.asciiToHex("age-range"),
        1,
        { from: owner }
      );
      await this.PatientRecord.registerRequester(
        requester1,
        1,
        web3.utils.asciiToHex("doctor1"),
        "Region1",
        { from: owner }
      );
      await this.PatientRecord.createMedicalRecord(
        "IPFSHASH",
        "Memo",
        ether("0.1"),
        { from: patient2 }
      );

      await this.PatientRecord.BuyMedicalRecord(0, {
        from: requester1,
        value: ether("0.1"),
      });

      await expectRevert(
        this.PatientRecord.BuyMedicalRecord(0, {
          from: requester1,
          value: ether("0.1"),
        }),
        "PatientRecord:already Bought"
      );
    });

    it("Exception: withdraw zero amount", async function () {
      await this.PatientRecord.registerPatient(
        patient2,
        "Region1",
        web3.utils.asciiToHex("age-range"),
        1,
        { from: owner }
      );
      await this.PatientRecord.registerRequester(
        requester1,
        1,
        web3.utils.asciiToHex("doctor1"),
        "Region1",
        { from: owner }
      );
      await this.PatientRecord.createMedicalRecord(
        "IPFSHASH",
        "Memo",
        ether("0.1"),
        { from: patient2 }
      );

      await this.PatientRecord.BuyMedicalRecord(0, {
        from: requester1,
        value: ether("0.1"),
      });

      await expectRevert(
        this.PatientRecord.Withdraw(ether("0"), { from: patient2 }),
        "PatientRecord:Amount is Zero"
      );
    });

    it("Exception: withdraw amount greater than the balance", async function () {
      await expectRevert(
        this.PatientRecord.Withdraw(ether("0.1"), { from: patient2 }),
        "PatientRecord:insufficient Funds"
      );
    });
  });
});
