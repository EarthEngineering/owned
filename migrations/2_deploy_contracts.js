const Owned = artifacts.require("Owned")

module.exports = deployer => {
  deployer.deploy(Owned)
}
