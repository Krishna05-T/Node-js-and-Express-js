// Globals - No Window!!!

/*
    __dirname - path to current directory
    __filename - file name
    require - function to use modules (Common JS)
    module - info about current modules (file)
    process - info about env where the program is being executed
*/

console.log(__dirname)
console.log("filename  : "+__filename)
console.log(process.platform)

// setInterval is globally access
// console is globally access


setInterval(() => {
    console.log("Jai Shree Ganesh")
},1000) 