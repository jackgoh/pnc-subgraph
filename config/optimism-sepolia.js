const WETH = "0x4200000000000000000000000000000000000006";
const USDT = "0x9e5aac1ba1a2e6aed6b32689dfcf62a509ca96f3";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
    network: "optimism-sepolia",
    wNativeAddress: WETH,
    v3: {
        wNativeStablePoolAddress: "0xc4f981189558682f15f60513158b699354b30204", // PancakeV3Pool WBNB-USDT 500 stable pool
        stableIsToken0: false,
        factoryAddress: "0x2817598ED8aeBb1f79237BDE48e9747A808Ae317", // PancakeV3Factory
        startBlock: 13111026,
        stableCoins: [USDT],
        whitelistAddresses: [WETH, USDT],
        nonfungiblePositionManagerAddress: "0x46a15b0b27311cedf172ab29e4f4766fbe7f4364", // NonfungiblePositionManager
        nonfungiblePositionManagerStartBlock: 13111026,
        minETHLocked: 1,
    },
    v2: {
        factoryAddress: "0x3489c2532dFE46caaBe6cF456bdd47A9D85Fd8EF", // PancakeFactory
        startBlock: 13111026,
        wNativeStablePair0: "0x0000000000000000000000000000000000000000", // WETH-USDC
        wNativeStablePair1: "0x706f7257e78b6f2404a1afb5c480645a6f5be91d", // WETH-USDT
        whitelistAddresses: [WETH, USDT],
        minETHLocked: 0,
    },
};
