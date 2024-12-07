const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'YUT86TT8T78Y9','UYFG87TGG8887');

bitcoin.createNewTransaction(100, 'ALEX6R7T88Y8Y8', 'JENN293I0I98U34');

bitcoin.createNewBlock(123123, '7Y87YY6TR76R6R','87T763WW39887T');

bitcoin.createNewTransaction(50, 'ALEX6R7T88Y8Y8', 'JENN293I0I98U34');
bitcoin.createNewTransaction(300, 'ALEX6R7T88Y8Y8', 'JENN293I0I98U34');
bitcoin.createNewTransaction(2000, 'ALEX6R7T88Y8Y8', 'JENN293I0I98U34');

bitcoin.createNewBlock(9878934, '76RERT7Y7Y8Y8Y','TR865R5RT7T6R');

console.log(bitcoin.chain[2]);