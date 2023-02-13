/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require('@nomiclabs/hardhat-waffle');
 require('dotenv').config();
 require('@openzeppelin/hardhat-upgrades');
 require("@nomiclabs/hardhat-etherscan");
 require("@nomiclabs/hardhat-solhint");

 module.exports = {
   solidity: {
    compilers: [
     {
      version:"0.8.2",
      settings:{
      optimizer: {
        enabled: true,
        runs: 200
      }
    }}
    ],
    //  gas:7000000,
     gasMultiplier:3,
    //  gasPrice:7.3,
   },
   defaultNetwork: "hardhat",
 
   networks:{
    bsctest: {
     
     // url: " https://speedy-nodes-nyc.moralis.io/e0ef71f5fab2e09b6c207349/bsc/testnet",
     // accounts: [`${process.env.PKEY}`]
   // },
   // bscmain: {
     // url: "https://speedy-nodes-nyc.moralis.io/e0ef71f5fab2e09b6c207349/bsc/mainnet",
     // accounts: [`${process.env.PKEY}`]
  //  },
  url: "https://data-seed-prebsc-1-s1.binance.org:8545",
  accounts: [`${process.env.PKEY}`]
},
bscmain: {
  url: "https://bsc-dataseed.binance.org",
  accounts: [`${process.env.PKEY}`]
},

   },
   etherscan: {
    apiKey: "STGID9MNS12WM47ZR6RUY99YKJM1TBM7RW"
  },
  bscscan: {
    apiKey: "STGID9MNS12WM47ZR6RUY99YKJM1TBM7RW"
  }
 };
  