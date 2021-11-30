const PatientRecord = artifacts.require("./PatientRecord.sol");
module.exports = function (deployer, network) {
  deployer.deploy(PatientRecord);
};
