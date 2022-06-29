const BowheadDevChallenge = artifacts.require("BowheadDevChallenge");
const ethers = require("ethers");


contract("BowheadDevChallenge", async (accounts)=>{


    it('should register a user with the level 1', async() => {
        let instance = await BowheadDevChallenge.deployed();
        let meta = instance;
        await meta.registerUser(1);
    });

    it('should add results in the blockchain', async() => {
        let instance = await BowheadDevChallenge.deployed();
        let meta = instance;
        const result1 = ethers.utils.formatBytes32String("one,one");
        const result2 = ethers.utils.formatBytes32String("one,two");
        const result3 = ethers.utils.formatBytes32String("three,one");
        await meta.addHealthData(result1);
        await meta.addHealthData(result2);
        await meta.addHealthData(result3);
    });

    it('should return results', async() => {
        let instance = await BowheadDevChallenge.deployed();
        let meta = instance;
        await meta.getHealthData();
    });


})