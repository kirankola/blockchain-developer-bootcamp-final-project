// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

//import "@openzeppelin/contracts/token/ERC20/IERC20.sol;

contract PatientRecord is Ownable {
    using Counters for Counters.Counter;
    // ** Enums **
    enum Gender {
        Male,
        Female
    }
    enum RequesterType {
        Company,
        Doctor,
        ResearchStudent
    }
    struct Requester {
        uint256 id;
        RequesterType requesterType;
        bytes32 name;
        string region;
        address userAddress;
    }
    struct Patient {
        uint256 id;
        //bytes32 name;
        bytes32 ageRange;
        Gender gender;
        string region;
        address userAddress;
    }

    struct MedicalRecord {
        uint256 id;
        string IPFShash;
        address patient;
        string recordType;
        uint256 price;
    }

    //** State Variables **
    Counters.Counter private _patientsCounter;
    Counters.Counter private _requestersCounter;
    Counters.Counter private _medicalRecordsCounter;

    mapping(address => uint256) private balance;
    mapping(address => Patient) public patients; // registering all patients
    //mapping(uint256 => address) public idToPatientAddress;
    mapping(address => uint256[]) public patientsMedicalRecords;
    mapping(address => Requester) requesters; // users who buy the medical records ex: pharma, doctors, reserchers etc
    //mapping(uint256 => address) idTorequesterAddress; // users who buy the medical records ex: pharma, doctors, reserchers etc
    mapping(uint256 => MedicalRecord) medicalRecords; // mapping to patient medicald records. patient can have multiple records
    mapping(address => uint256[]) public requestersMedicalRecords;
    mapping(address => mapping(uint256 => bool))
        public requesterPurchasedMedicalRecord;

    event PatientRegistered(address indexed patient, uint256 patientID);
    event requesterRegistered(address indexed requester, uint256 requesterID);
    event medicalRecordCreated(
        address indexed patient,
        uint256 medicalRecordID
    );
    event medicalRecordPurchased(
        address indexed requester,
        uint256 medicalRecordID,
        uint256 price
    );
    event Withdrawal(address indexed patient, uint256 amount);
    /**
     * @dev Throws if called by any account not a registered patient.
     */
    modifier onlyPatient() {
        //check if caller is Patient
        require(
            patients[_msgSender()].userAddress != address(0),
            "PatientRecord:Only patient"
        );
        _;
    }
    /**
    * @dev Throws if requester address did not purchase medical record first.
     
    */
    modifier isAuthorized(uint256 _medicalRecordID, address _requester) {
        require(
            requesterPurchasedMedicalRecord[_requester][_medicalRecordID],
            "PatientRecord:Not authorized"
        );
        _;
    }

    modifier onlyRequester() {
        //check if caller is Patient
        require(
            requesters[_msgSender()].userAddress != address(0),
            "PatientRecord:Only rquester"
        );
        _;
    }
    /**
    * @dev Throws if sent eth value less than the price.
     
    */
    modifier paidEnough(uint256 _price) {
        require(msg.value >= _price, "PatientRecord:not enough");
        _;
    }
    /**
    * @dev returns any extra eth sent .
     
    */
    modifier checkValue(uint256 _medicalRecordID, address _buyer) {
        _;
        uint256 _price = medicalRecords[_medicalRecordID].price;
        uint256 amountToReturn = msg.value - _price;
        payable(_buyer).transfer(amountToReturn);
    }

    function registerPatient(
        address patientAddr,
        string memory region,
        bytes32 ageRange,
        Gender gender
    ) public onlyOwner returns (uint256) {
        require(patientAddr != address(0), "PatientRecord:Zero address");
        uint256 id = _patientsCounter.current();
        patients[patientAddr] = Patient({
            id: id,
            ageRange: ageRange,
            gender: gender,
            region: region,
            userAddress: patientAddr
        });
        _patientsCounter.increment();
        emit PatientRegistered(patientAddr, id);
        return id;
    }

    function registerRequester(
        address requesterAddr,
        RequesterType requesterType,
        bytes32 name,
        string memory region
    ) public onlyOwner returns (uint256) {
        require(requesterAddr != address(0), "PatientRecord:Zero address");
        uint256 id = _requestersCounter.current();
        requesters[requesterAddr] = Requester({
            id: id,
            name: name,
            requesterType: requesterType,
            region: region,
            userAddress: requesterAddr
        });

        _requestersCounter.increment();
        emit requesterRegistered(requesterAddr, id);
        return id;
    }

    function createMedicalRecord(
        string memory IPFShash,
        string memory recordType,
        uint256 price
    ) public onlyPatient returns (uint256) {
        require(price > 0, "PatientRecord:Price is Zero");
        uint256 id = _medicalRecordsCounter.current();
        medicalRecords[id] = MedicalRecord(
            id,
            IPFShash,
            msg.sender,
            recordType,
            price
        );
        patientsMedicalRecords[_msgSender()].push(id);
        _medicalRecordsCounter.increment();
        emit medicalRecordCreated(_msgSender(), id);
        return id;
    }

    function BuyMedicalRecord(uint256 medicalRecordID)
        public
        payable
        onlyRequester
        paidEnough(medicalRecords[medicalRecordID].price)
        checkValue(medicalRecordID, _msgSender())
        returns (bool)
    {
        require(
            medicalRecords[medicalRecordID].patient != address(0),
            "PatientRecord:Record not exisit"
        );
        require(
            !requesterPurchasedMedicalRecord[_msgSender()][medicalRecordID],
            "PatientRecord:already Bought"
        );

        uint256 price = medicalRecords[medicalRecordID].price;
        balance[medicalRecords[medicalRecordID].patient] += price;
        requesterPurchasedMedicalRecord[_msgSender()][medicalRecordID] = true;
        emit medicalRecordPurchased(_msgSender(), medicalRecordID, price);
        return true;
    }

    function Withdraw(uint256 amount) public {
        require(msg.sender != address(0), "PatientRecord:Zero address");
        require(amount > 0, "PatientRecord:Amount is Zero");
        require(
            balance[_msgSender()] >= amount,
            "PatientRecord:insufficient Funds"
        );
        balance[_msgSender()] -= amount;
        payable(_msgSender()).transfer(amount);
        emit Withdrawal(_msgSender(), amount);
    }

    function balanceOf(address account) public view returns (uint256) {
        return balance[account];
    }

    function patientsCounter() public view returns (uint256) {
        return _patientsCounter.current();
    }

    function requestersCounter() public view returns (uint256) {
        return _requestersCounter.current();
    }

    function medicalRecordsCounter() public view returns (uint256) {
        return _medicalRecordsCounter.current();
    }

    /* function getMedicalRecords() public view returns (MedicalRecord[] memory) {
        MedicalRecord[] memory medicalRecords = new MedicalRecord[](
            _medicalRecordsCounter.current()
        );
        for (uint256 i = 0; i < medicalRecords.length; i++) {
            medicalRecords[i] = medicalRecords[i];
        }
        return medicalRecords;
    } */

    function getMedicalRecords() public view returns (MedicalRecord[] memory) {
        MedicalRecord[] memory _medicalRecords = new MedicalRecord[](
            _medicalRecordsCounter.current()
        );
        for (uint256 i = 0; i < _medicalRecords.length; i++) {
            _medicalRecords[i] = medicalRecords[i];
        }
        return _medicalRecords;
    }

    /*     function getMedicalRecords(uint256 id)
        public
        view
        returns (MedicalRecord memory)
    {
         MedicalRecord[] memory _medicalRecords = new MedicalRecord[](
            _medicalRecordsCounter.current()
        );
        for (uint256 i = 0; i < _medicalRecords.length; i++) {
            _medicalRecords[i] = medicalRecords[i];
        }  
        return medicalRecords[id];
    } */

    /*    function getMedicalRecords() public view returns (uint256) {
        MedicalRecord[] memory medicalRecords = new MedicalRecord[](
            _medicalRecordsCounter.current()
        );
        for (uint256 i = 0; i < medicalRecords.length; i++) {
            medicalRecords[i] = medicalRecords[i];
        }
        return medicalRecords.length;
    } */
}
