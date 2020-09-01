var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')


let db = new sqlite3.Database('./products.db', (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.')

    }
});


module.exports = db
