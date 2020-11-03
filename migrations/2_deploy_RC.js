var Register = artifacts.require("Register");

module.exports = function(deployer, network, accounts) {

    if (network == "ganache") {
        // deploy Register.sol
        deployer.deploy(Register, {from: accounts[0]});
    };     
}

// Reference: Migrate script edit(https://www.sitepoint.com/truffle-migrations-explained/)