import { ethers } from 'hardhat';
const hre = require('hardhat');
import * as fs from 'fs';
fs.mkdir('Build', (err) => {
  console.log('File created');
});
async function main() {
  const Event = await ethers.getContractFactory('Events');
  const event = await Event.deploy();

  await event.deployed();
  console.log(`Events deployed to ${event.address}`);
  let Eventdata = {
    address: event.address,
    network: {
      name: (await event.provider.getNetwork()).name,
      chainId: (await event.provider.getNetwork()).chainId,
    },
    abi: JSON.parse(String(event.interface.format('json'))),
  };

  fs.writeFileSync('Build/Event.json', JSON.stringify(Eventdata, null, 2));
}
async function verify() {
  let address = '0xBED1F43Ad30ca524E52D0B6187F8083B8B7c4178';
  await hre.run('verify:verify', {
    address: address,
    constructorArguments: [],
  });
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
verify().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
