//https://eth-goerli.alchemyapi.io/v2/OaLNkN3ZX0JvYVMt21lOYnisaUxM27iD

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks:{
    goerli:{
      url: "https://eth-goerli.alchemyapi.io/v2/OaLNkN3ZX0JvYVMt21lOYnisaUxM27iD",
      accounts: ["3323bc62ebbf9eacde7a7608e28ef33d6356ebae5ecc3143b48dad582ae354c6"]
    }
  }
};


