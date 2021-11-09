// SPDX-License-Identifier: MIT
pragma Solidity 0.8.0;

contract patientRecord {


    // ** Enums **
    enum Gender { Male, Female } 

    struct Patient  {
     //   uint userID;
        bytes32 name; 
         uint age;
        Gender gender;
        string region;
        address userAddress;
    }

    struct MedicalRecord{
        uint id;
        string IPFShash;
        Patient userP;
        string memo;
        uint price;

    }

    //** State Variables **
    uint id; //Id for the patient record
    Patient private patient; // The patient we are referring to
    address public recordOwner; //The address of the owner

    mapping (address => User)  patients;  // registering all patients
    mapping (address => User)  dataUsers; // users who buy the medical records ex: pharma, doctors, reserchers etc
    mapping (uint => MedicalRecord) medicalRecords; // mapping to patient medicald records. patient can have multiple records
    uint userCount;
    uint medicalRecordCount;


    modifier onlyAdmin(){
        //check if caller is admin
        _;
    }
    modifier onlyPatient(){
        //check if caller is Patient
        _;
    }

    function registerPatient(address patientAddr, string memory region) public onlyAdmin returns(uint){
        //register new patient
        //return Patient ID

    }

    function registerDataUser(address dataUserAddr, string memory region) public onlyAdmin returns(uint){
        //register new dataUser
        //return dataUser ID

    }


    function createMedicalRecord(address patientAddr, string memory IPFShash,string memory memo, uint price) public onlyPatient returns(uint){
        //create medical record of patient
        //return medical record ID
       

    }



    

}