const ParkingContract = artifacts.require("ParkingContract");

module.exports = function (deployer) {
  deployer.deploy(ParkingContract);
};
