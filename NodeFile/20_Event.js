const EventEmitter = require('events')
const customEmitter = new EventEmitter();


customEmitter.on('response', (name ,age) => {
    console.log("Event recieved" + ` name :${name}  age :${age}`);
})
customEmitter.on('response', () => {
    console.log("Event2 Recieved")
})

customEmitter.emit('response', 'krishna', 19)