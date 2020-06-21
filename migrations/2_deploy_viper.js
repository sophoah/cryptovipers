const Migrations = artifacts.require("ViperToken");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
