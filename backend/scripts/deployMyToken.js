const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contract with the account:", deployer.address);

  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy(deployer.address);
  await myToken.waitForDeployment();

  const contractAddress = await myToken.getAddress();
  console.log("MyToken deployed to:", contractAddress);
}
