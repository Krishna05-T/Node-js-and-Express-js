const {readFile, writeFile, read} = require('fs')

readFile('./content/subfolder/text.txt', 'utf8', (err, result) => {
    if(err) {
        console.log("Error")
    }

    const first = result;
    readFile('./content/subfolder/write.txt', 'utf8', (err, result) => {
        if(err){
            console.log("Error")
            return
        }

    const second = result;
    writeFile("./content/subfolder/resultAsync.txt", `here is result : ${first} ${second}`, (err, result) =>{
        if(err) {
            console.log("Error")
            return
        } else {
            console.log(result)     // undefinded because no data go to result in writefiel
        }
    })
    })
})