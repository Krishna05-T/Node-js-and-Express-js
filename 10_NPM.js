/*
    npm - global command, come with node
    npm --version

    local dependency - use it only in this particular project.
    npm i <packageName>

    global dependency - use it in any project
    npm install -g <packageNmae>

    // package.json - manifest file (stores 
    // important info about project/package)
    manual approach (create package.json in the root, create properties etc)
    // npm inti (Step by step, press enter to skip)
    // npm init -y (everything default)
*/


const _ = require('lodash')
const item = [1,[2, [3, [4]]]]

const flatarr = _.flattenDeep(item)
console.log(flatarr)

// gitignore is file that specifies which files are going to be ignored by the sourec control(these file contain not go on git)