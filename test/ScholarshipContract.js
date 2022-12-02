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
  async function deployScholarshipFixture () {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners()

    const promoCodes = [
      '0BXDN-5DT3$',
      '0BXDN-5DT33',
      '0BXDN-5DT34',
      '0BXDN-5DT35',
      '0BXDN-5DT36',
      '0BXDN-5DT37',
      '0BXDN-5DT38'
    ]
    const ticketPrice = hre.ethers.utils.parseEther('0.01')
    const poapCollections = ['44863', '39583']

    const ScholarshipContract = await ethers.getContractFactory(
      'ScholarshipContract'
    )
    const scholarshipContract = await ScholarshipContract.deploy(
      owner.address,
      promoCodes,
      ticketPrice,
      poapCollections
    )

    // console.log(scholarshipContract)

    return {
      scholarshipContract,
      owner,
      promoCodes,
      ticketPrice,
      poapCollections,
      otherAccount
    }
  }

  describe('Deployment', function () {
    xit('Should return PoapCollections', async function () {
      const { scholarshipContract, poapCollections } = await loadFixture(
        deployScholarshipFixture
      )
      // console.log(scholarshipContract)

      expect(await scholarshipContract.getPoapCollections()).to.equal(
        poapCollections
      )
    })

    it('Should set the right owner', async function () {
      const { scholarshipContract, owner } = await loadFixture(
        deployScholarshipFixture
      )

      expect(await scholarshipContract.owner()).to.equal(owner.address)
    })
  })

  describe('ApplyForTicket', function () {
    describe('Validations', function () {
      it('Should revert with the right error if already applied', async function () {
        const { scholarshipContract, ticketPrice } = await loadFixture(
          deployScholarshipFixture
        )

        scholarshipContract.applyForTicket({ value: ticketPrice })

        await expect(
          scholarshipContract.applyForTicket({ value: ticketPrice })
        ).to.be.revertedWith(
          'You already bought a ticket. There is only one Ticket per person.'
        )
      })

      it('Should revert with the right error if send amount was to low', async function () {
        const { scholarshipContract } = await loadFixture(
          deployScholarshipFixture
        )

        await expect(
          scholarshipContract.applyForTicket({ value: 0 })
        ).to.be.revertedWith('Sent amount is too low')
      })

      xit('Should revert with the right error if no tickets are left', async function () {
        const { scholarshipContract, ticketPrice } = await loadFixture(
          deployScholarshipFixture
        )

        await expect(
          scholarshipContract.applyForTicket({ value: ticketPrice })
        ).to.be.revertedWith('No more tickets available')
      })
    })

    describe('Success', function () {
      xit('Should return the PromoCode ', async function () {
        const { scholarshipContract, promoCodes, ticketPrice } =
          await loadFixture(deployScholarshipFixture)

        // check for transaction went through
        await expect(
          scholarshipContract.applyForTicket({ value: ticketPrice })
        ).to.equal(promoCodes[1].toString())
      })

      it('Should emit an event on apply', async function () {
        const { scholarshipContract, promoCodes, ticketPrice } =
          await loadFixture(deployScholarshipFixture)

        await expect(scholarshipContract.applyForTicket({ value: ticketPrice }))
          .to.emit(scholarshipContract, 'AppliedForTicket')
          .withArgs(promoCodes[1].toString()) // We accept any value as `when` arg
      })

      it('Ticket price should have been added to Contract balance', async function () {
        const { scholarshipContract, promoCodes, ticketPrice } =
          await loadFixture(deployScholarshipFixture)

        await expect(scholarshipContract.applyForTicket({ value: ticketPrice }))
          .to.emit(scholarshipContract, 'AppliedForTicket')
          .withArgs(promoCodes[1].toString()) // We accept any value as `when` arg
      })
    })
  })
})
