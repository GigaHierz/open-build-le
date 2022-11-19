// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require('hardhat')

async function main () {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000)
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS

  const ticketPrice = hre.ethers.utils.parseEther('0.01')

  const ScholarshipContract = await hre.ethers.getContractFactory(
    'ScholarshipContract'
  )
  const scholarshipContract = await ScholarshipContract.deploy(
    '0x78344979959c9d25beb73748269a2b5533f87a51',
    // 0x78344979959c9d25beb73748269a2b5533f87a51,
    [
      '0BXDN-5DT3$',
      '0BXDN-5DT33',
      '0BXDN-5DT34',
      '0BXDN-5DT35',
      '0BXDN-5DT36',
      '0BXDN-5DT37',
      '0BXDN-5DT38'
    ],
    ticketPrice,
    []
  )

  await scholarshipContract.deployed()

  console.log(ticketPrice)
  console.log(`Smart Contract deployed to ${scholarshipContract.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
