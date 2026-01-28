/*
    Common JS, every file is module (By default)
    Module - Encapsulated Code (Only share minimum)


    In node js every file is a module
    A module lets you split code into reusable, isolated files instead of writing everything in one place.
*/



//here we import file(module)
const name = require("./02_Module1")
const sayHi = require("./02_Module2")

const items = require("./03_alterSyntax")

console.log(items.item[0])
console.log(items.item[1])
console.log(items.item[2])

const person = require("./03_alterSyntax")
console.log(person.singlePerson.name)
// console.log(name)

 sayHi("krishna")
 sayHi(name.ram)
 sayHi(name.hari)


 require("./04_MindGrenade")