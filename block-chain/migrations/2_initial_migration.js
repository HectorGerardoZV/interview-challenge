const BowheadDevChallenge = artifacts.require("../contracts/BowheadDevChallenge.sol");

module.exports = function (deployer) {
  deployer.deploy(BowheadDevChallenge, {overwrite: false});
};
