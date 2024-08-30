require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-verify");
require("hardhat-deploy")
require('dotenv').config();
const SEPOLIA_URL = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API = process.env.ETHER_SCAN_API;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:{
    hardhat:{},
    sepolia:{
      url:SEPOLIA_URL,
      accounts:[PRIVATE_KEY],
      saveDeployments:true
    }
  },
  etherscan:{
    apiKey:ETHERSCAN_API,
    sourcify: {
      enabled: true
    }
  },
  namedAccounts:{
    deployer:{
      default:0
    }
  }
};
