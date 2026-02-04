const { readFile } = require('fs');


const getText = (path) => {
    return new Promise((reject, resolve) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
               reject(err)
            }
            resolve(data)
        })
    })
}


getText('./content/.first.txt')
.then(result => console.log(result))
.catch(err => console.log(err))