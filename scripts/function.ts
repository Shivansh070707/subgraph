import { ethers } from 'hardhat';

async function main() {
  let address = '0xBED1F43Ad30ca524E52D0B6187F8083B8B7c4178';
  const event = await ethers.getContractAt('Events', address);
  await event.set(1);
  await event.set1(4);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
