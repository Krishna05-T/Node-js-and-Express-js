const os = require("os")


// Give information about the current user
const user = os.userInfo()
console.log(user)

// Show how long the system has been running(in second)
const time = os.uptime()
console.log(time)

// Tell which OS you are running
const system = os.platform()
console.log(system)

// Returns the OS name
const name = os.type()
console.log(name)           //Windows_NT

// Shows the CPU architecture.
console.log(os.arch())      //x64

// Memory information (in bytes)
const totalmemo = os.totalmem()
console.log(totalmemo)

const freememo = os.freemem()
console.log(freememo)

// give system hostname
console.log(os.hostname())

// Returns CPU core details
console.log(os.cpus)


// simple real example

const systemInfo = {
    osName: os.type(),
    platform: os.platform(),
    architecture: os.arch(),
    uptime: os.uptime(),
    totalmemo: os.totalmem(),
    freeMemo: os.freemem()
}

console.log(systemInfo)