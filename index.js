var BigNumber = require('bignumber.js');

var bitcoin = {
    name: 'BTC',
    decimals: 8,
    constant: Math.pow(10, 8)
};

var zar = {
    name: 'ZAR',
    decimals: 2,
    constant: Math.pow(10, 2)
};

function convertToBaseUnitOf(currency, unitToConvert) {
    return new BigNumber(unitToConvert).dividedBy(currency.constant).toNumber();
}

function convertToSmallestUnitOf(currency, unitToConvert) {
    return new BigNumber(unitToConvert).times(currency.constant).toNumber();
}

function BitcoinToSatoshi(bitcoinAmount){
    return convertToSmallestUnitOf(bitcoin,bitcoinAmount);
}

function RandToCent(randAmount) {
    return convertToSmallestUnitOf(zar, randAmount);
}

function SatoshiToBitcoin(satoshi) {
    return convertToBaseUnitOf(bitcoin, satoshi);
}

function CentToRand(centAmount) {
    return convertToBaseUnitOf(zar, centAmount);
}

module.exports = {
    RandToCent,
    CentToRand,
    SatoshiToBitcoin,
    BitcoinToSatoshi
}
