require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: {
    version: '0.8.0', // ✅ As per your contract version
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './src/contracts',  // ✅ Your `Liftup.sol` is here
    artifacts: './src/abis',     // ✅ You want ABI + address here
  },
  mocha: {
    timeout: 40000,
  },
};
