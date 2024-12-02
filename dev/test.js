const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'YUT86TT8T78Y9','UYFG87TGG8887');
bitcoin.createNewBlock(111, 'UYG76T76T7R7T','HY7T7T76YT76T');
bitcoin.createNewBlock(2899, 'YUT7TT67T7TT','IUY87Y87Y7Y8');

console.log(bitcoin);