//Path Module is built in Node.js module used to work with file and directory paths in a safe, cross-platform way.

const path = require('path')

// Return the path separator used by  the OS
console.log(path.sep)


// Join path part correctly
const filePath = path.join('content', 'subfolder', 'text.txt')
console.log(filePath)

//Returns the file name form a path
console.log(path.basename(filePath))        //test.txt

// Returns the directory name of a path
console.log(path.dirname(filePath))         //content/subfolder


//Returns the file extension
console.log(path.extname(filePath))         //.txt

// Break a path into an object
console.log(path.parse(filePath))    // {
                                    //   root: '',
                                    //   dir: 'content\\subfolder',
                                    //   base: 'text.txt',
                                    //   ext: '.txt',
                                    //   name: 'text'

                                    //   }
// Returns an absolute path
const absolutePath = path.resolve('content', 'subfolder', 'test.txt')
console.log(absolutePath)
