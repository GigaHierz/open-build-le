require('@nomicfoundation/hardhat-toolbox')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.17',

  networks: {
    goerli: {
      // url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      url: `https://eth-goerli.g.alchemy.com/v2/RMikw8e80aHE2Ywu-uV1XgzPE2lhdfGU`,
      accounts: [
        'ef4ccaa9a703ab1e4185e4add3497429fa83670484d1aaae934a279480f93729'
      ]
    }
  }
}
