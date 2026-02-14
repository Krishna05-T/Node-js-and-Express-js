// const {writeFileSync} = require('fs')

// for(let i=0; i<10000; i++) {
//     writeFileSync('./content/big.txt',`i ${i}`, {flag: 'a'});
// }


//default 64kb
//last buffer - remainder
//higWaterMark - control size
// const stream = createReadStream('./content/big.txt', {highWaterMark : 90000})
//const stream = createReadStream('./content/big.txt', {encoding : 'utf8'})
const {createReadStream} = require('fs');


const stream = createReadStream('./content/big.txt', {highWaterMark : 90000, encoding: 'utf8'})

stream.on('data' ,result => {
    console.log(result);
})

