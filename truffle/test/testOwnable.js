const {
  constants,
  expectEvent,
  expectRevert,
} = require("@openzeppelin/test-helpers");
const { ZERO_ADDRESS } = constants;

const { expect } = require("chai");

const PatientRecord = artifacts.require("PatientRecord");

contract("PatientRecord", function (accounts) {
  const [owner, other] = accounts;

  beforeEach(async function () {
    this.PatientRecord = await PatientRecord.new({ from: owner });
  });

  it("has an owner", async function () {
    expect(await this.PatientRecord.owner()).to.equal(owner);
  });

  describe("transfer ownership", function () {
    it("changes owner after transfer", async function () {
      const receipt = await this.PatientRecord.transferOwnership(other, {
        from: owner,
      });
      expectEvent(receipt, "OwnershipTransferred");

      expect(await this.PatientRecord.owner()).to.equal(other);
    });

    it("prevents non-owners from transferring", async function () {
      await expectRevert(
        this.PatientRecord.transferOwnership(other, { from: other }),
        "Ownable: caller is not the owner"
      );
    });

    it("guards ownership against stuck state", async function () {
      await expectRevert(
        this.PatientRecord.transferOwnership(ZERO_ADDRESS, { from: owner }),
        "Ownable: new owner is the zero address"
      );
    });
  });

  describe("renounce ownership", function () {
    it("loses owner after renouncement", async function () {
      const receipt = await this.PatientRecord.renounceOwnership({
        from: owner,
      });
      expectEvent(receipt, "OwnershipTransferred");

      expect(await this.PatientRecord.owner()).to.equal(ZERO_ADDRESS);
    });

    it("prevents non-owners from renouncement", async function () {
      await expectRevert(
        this.PatientRecord.renounceOwnership({ from: other }),
        "Ownable: caller is not the owner"
      );
    });
  });
});
