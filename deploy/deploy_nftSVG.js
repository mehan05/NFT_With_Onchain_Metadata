const fs = require('fs');
const { ethers } = require('hardhat');

module.exports = async({
    deployments,
    getNamedAccounts,
    getChainId
})=>{
    const {deploy,log} = deployments;
    const {deployer} = await getNamedAccounts();
    const chainId = await getChainId();

    const svgNFT =await deploy("nftSVG",{
        from:deployer,
        log:true
    })
    // console.log("All COntract details:",svgNFT);
    console.log("Contract deployed at:",svgNFT.address);

    const filePath = "./img/circle.svg";
    let svg = fs.readFileSync(filePath,{encoding:"utf8"});
    const accounts = await ethers.getSigners();
    const signer = accounts[0];

    const svgNFTConract = await ethers.getContractFactory("nftSVG");


    const contractSVG =new ethers.Contract(svgNFT.address,svgNFTConract.interface,signer);

    let transaction = await contractSVG.create(svg);
    await transaction.wait();

    log("NFT-Created");

    console.log("Token-URI--1: ",await contractSVG.tokenURI(0));
    console.log("Token-URI--2: ",await contractSVG.tokenURI(1));

    log("npx hardhat verify --network sepolia ", svgNFT.address);
}