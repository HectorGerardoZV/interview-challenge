const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Testing BowheadDevChallenge contract", function () {

  
  it("should to deploy the contract", async function () {
      const BowheadDevChallenge = await ethers.getContractFactory("BowheadDevChallenge");
      const bowheadDevChallenge = await BowheadDevChallenge.deploy();
      await bowheadDevChallenge.deployed();

  });

  it('should add', async() => {
      const BowheadDevChallenge = await ethers.getContractFactory("BowheadDevChallenge");
      const bowheadDevChallenge = await BowheadDevChallenge.deploy();
      await bowheadDevChallenge.registerUser(2);
      await bowheadDevChallenge.addHealthData(ethers.utils.formatBytes32String("Perfect, thank you!, Yes"));
  });

  it('should ', async () => {
      const BowheadDevChallenge = await ethers.getContractFactory("BowheadDevChallenge");
      const bowheadDevChallenge = await BowheadDevChallenge.deploy();

      await bowheadDevChallenge.registerUser(2);
      await bowheadDevChallenge.addHealthData(ethers.utils.formatBytes32String("Perfect, thank you!, Yes"));
      const result = await bowheadDevChallenge.getHealthData();
      

    result.forEach(r=>{
      console.log(ethers.utils.toUtf8String(r));
    })

  });
});
