# NFT On-Chain Metadata Deployment

This project involves deploying an NFT smart contract with on-chain metadata using Solidity and Hardhat.

## Setup Instructions

### 1. Install Dependencies

First, install the required Node.js packages by running:

```bash
npm install
```

### 2. Configure Environment Variables
Create a .env file in the root directory of your project with the following content:

```bash
SEPOLIA_URL=""        # Use API providers like Alchemy or Infura
PRIVATE_KEY=""        # Your Ethereum wallet private key
ETHER_SCAN_API=""     # Etherscan API key for contract verification
```

### 3. Deploy the Contract
Run the following command to deploy the smart contract on the Sepolia test network:

```bash
npx hardhat deploy --network sepolia
```

### 4. Verify the Contract
After deployment, verify the contract using the Etherscan API with the following command:

```bash
npx hardhat verify --network sepolia <address_of_deployed_contract>
```
Replace <address_of_deployed_contract> with the address of your deployed smart contract.
