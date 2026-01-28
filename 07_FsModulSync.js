// const fs = require('fs')

// const read = fs.readFileSync("./content/subfolder/text.txt", 'utf8')
// console.log(read)

// const text = "I am fine how are you"
//  fs.writeFileSync("./content/subfolder/write.txt", `${text}`)

 const {readFileSync, writeFileSync} = require('fs')
 const first = readFileSync("./content/subfolder/text.txt", 'utf8')
 console.log(first)
const second = readFileSync("./content/subfolder/write.txt", 'utf8')
console.log(second)

const result = writeFileSync("./content/subfolder/result.txt", `Conservation ${first} ${second}`, {flag : 'a'})
