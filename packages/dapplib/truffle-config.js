require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift rescue mad hour hunt lonely equal genre'; 
let testAccounts = [
"0x6ccceb4b24335442ec395baf2186c586da58959c779895b858c4b43d472fccf5",
"0xd125d0e1a24d8213640fc2af6202ceb3d79eb81eee3c0d165a9549b99c78bce2",
"0x3ee42aaf8d29ceb0fbd12897b1de6a665baf45149bcf26eb91475241cb83519e",
"0x8276b137bfcade280295782d2811c99e0a621966431bd375408675a40790e45c",
"0x1222a9e5e2a9393e9ae3f86f74e5eddc669b805a2aeef81b1e0c64c025c10ab0",
"0xdc4a4a83afeb301e91bf16a5bf992b49e5e187f7cf0ce12b462132071be1d403",
"0x2f94cab0f0c4bfcd844f5db19f46548669cd31cf52c82e778c825f7a7ad1f0cd",
"0xceb7641877867c5145513c774a1b873d24f503e22374e6094fa56e5dc6867740",
"0x7104de1a696d7db83263ce6635ed89d3e3981de9f40d2056d7950ee3ad3db0df",
"0xe262d39574790813470916e48ac98e2583fe61ee227dc09b46eab77fc0ffb55f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
