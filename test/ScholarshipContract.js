const {
  time,
  loadFixture
} = require('@nomicfoundation/hardhat-network-helpers')
const { anyValue } = require('@nomicfoundation/hardhat-chai-matchers/withArgs')
const { expect } = require('chai')

describe('ScholarshipContract', function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture () {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners()

    let promoCodes = ['0BXDN-5DT3$']
    let ticketPrice = 300
    let poapCollections = []

    const ScholarshipContract = await ethers.getContractFactory(
      'ScholarshipContract'
    )
    const scholarshipContract = await ScholarshipContract.deploy(
      0x78344979959c9d25beb73748269a2b5533f87a51,
      [
        '0BXDN-5DT3$',
        '0BXDN-5DT33',
        '0BXDN-5DT34',
        '0BXDN-5DT35',
        '0BXDN-5DT36',
        '0BXDN-5DT37',
        '0BXDN-5DT38'
      ],
      300,
      []
    )

    return {
      scholarshipContract,
      unlockTime,
      lockedAmount,
      owner,
      otherAccount
    }
  }

  describe('Deployment', function () {
    it('Should set the right unlockTime', async function () {
      const { lock, unlockTime } = await loadFixture(deployOneYearLockFixture)

      expect(await lock.unlockTime()).to.equal(unlockTime)
    })

    it('Should set the right owner', async function () {
      const { lock, owner } = await loadFixture(deployOneYearLockFixture)

      expect(await lock.owner()).to.equal(owner.address)
    })

    it('Should receive and store the funds to lock', async function () {
      const { lock, lockedAmount } = await loadFixture(deployOneYearLockFixture)

      expect(await ethers.provider.getBalance(lock.address)).to.equal(
        lockedAmount
      )
    })

    it('Should fail if the unlockTime is not in the future', async function () {
      // We don't use the fixture here because we want a different deployment
      const latestTime = await time.latest()
      const Lock = await ethers.getContractFactory('Lock')
      await expect(Lock.deploy(latestTime, { value: 1 })).to.be.revertedWith(
        'Unlock time should be in the future'
      )
    })
  })

  describe('Withdrawals', function () {
    describe('Validations', function () {
      it('Should revert with the right error if called too soon', async function () {
        const { lock } = await loadFixture(deployOneYearLockFixture)

        await expect(lock.withdraw()).to.be.revertedWith(
          "You can't withdraw yet"
        )
      })

      it('Should revert with the right error if called from another account', async function () {
        const { lock, unlockTime, otherAccount } = await loadFixture(
          deployOneYearLockFixture
        )

        // We can increase the time in Hardhat Network
        await time.increaseTo(unlockTime)

        // We use lock.connect() to send a transaction from another account
        await expect(lock.connect(otherAccount).withdraw()).to.be.revertedWith(
          "You aren't the owner"
        )
      })

      it("Shouldn't fail if the unlockTime has arrived and the owner calls it", async function () {
        const { lock, unlockTime } = await loadFixture(deployOneYearLockFixture)

        // Transactions are sent using the first signer by default
        await time.increaseTo(unlockTime)

        await expect(lock.withdraw()).not.to.be.reverted
      })
    })

    describe('Events', function () {
      it('Should emit an event on withdrawals', async function () {
        const { lock, unlockTime, lockedAmount } = await loadFixture(
          deployOneYearLockFixture
        )

        await time.increaseTo(unlockTime)

        await expect(lock.withdraw())
          .to.emit(lock, 'Withdrawal')
          .withArgs(lockedAmount, anyValue) // We accept any value as `when` arg
      })
    })

    describe('Transfers', function () {
      it('Should transfer the funds to the owner', async function () {
        const { lock, unlockTime, lockedAmount, owner } = await loadFixture(
          deployOneYearLockFixture
        )

        await time.increaseTo(unlockTime)

        await expect(lock.withdraw()).to.changeEtherBalances(
          [owner, lock],
          [lockedAmount, -lockedAmount]
        )
      })
    })
  })
})
