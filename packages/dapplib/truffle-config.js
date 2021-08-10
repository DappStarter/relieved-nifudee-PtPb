require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remember snake grid private bone sleep'; 
let testAccounts = [
"0x3fa4a405096d3d9424acb6c2864d03795ae9bed743162fc099b35c0435d7f180",
"0x0f3277049716ab99e9d2a0f45433b71be49f034cd8924f5925d1dd88b14e5ef9",
"0xb2ddd546fbb085ccde1337d51b7746d58e198eb5bddeca66b2cde5129e4ea6bb",
"0x599feb4afa0d31f8bfd9511311bdfc31c1b7b8ec7a15a299c01142c1655b359e",
"0x5e54d12eab3753bd5ef68fc8f949dbe92dbb33e8269df2baf0eee83a06e094a9",
"0x2e49ac3735f87f646ba9a9aaa65600d2bea3c0831b776385ab3430579b9f79f7",
"0xd2162226ded1ba78dde8d5a452d236dde758a36c3471ba7a8e5b5571de164c9e",
"0xa6f815dd10f6f695811a1506d6bffd63444be8cfa0355724375b72ea9a91395e",
"0xfabe37734b227c57383be6733f89e2b82b5a4a28de2e881137d760378964af2e",
"0x80dd450a2a834015ae59d1fc91950dadb2c8c1714c1630e0614b09e9c37c2424"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

