const Winner = artifacts.require("Winner")

module.exports = deployer => {
  deployer.deploy(Winner)
}
