//require('dotenv').config();
//require('babel-register')
const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "c51b6a1362624e5784213b11bb4555b7";
//
 const fs = require('fs');
 const mnemonic = fs.readFileSync(".secret").toString().trim();
module.exports = {

  networks: {
    rinkeby: {
     

      provider: function () {
        return new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`)
      },
      gasPrice: 44000000000,
      network_id: 4,
      skipDryRun: true 
      
    },
    development: {
      host: "127.0.0.1",
      port: "7545",
      gas: 4600000,
      network_id: "*"
    },
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }



}

}



