
const hre = require("hardhat");

const main = async()=> {
  try {
    const BowheadDevChallenge = await hre.ethers.getContractFactory("BowheadDevChallenge");
    const bowheadDevChallenge = await BowheadDevChallenge.deploy();
    await bowheadDevChallenge.deployed();
    console.log("BowheadDevChallenge deployed to:", bowheadDevChallenge.address);
  } catch (error) {
    console.log(error);
  }
}

const runMain = async()=>{
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

runMain();


