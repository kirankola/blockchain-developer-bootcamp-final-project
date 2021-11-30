const Multicall = artifacts.require("./Multicall.sol");
module.exports = function (deployer, network) {
  deployer.deploy(Multicall);
};
