import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import * as dotenv from 'dotenv';
dotenv.config();
const { ALCHEMY_API_KEY, GOERLI_API_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.17',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },
  mocha: {
    timeout: 100000000,
  },
  networks: {
    'truffle-dashboard': {
      url: 'http://localhost:24012/rpc',
    },
  },
  etherscan: {
    apiKey: GOERLI_API_KEY,
  },
};
export default config;
