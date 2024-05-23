import express from 'express'          // ES6
import mysql from 'mysql'

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '11111111',
    database : 'tempDB'
});
db.connect();


const app = express()
const port = 3000

app.get('/', function (req, res) {
    db.query('SELECT * from User', (error, rows, fields) => {
        if (error) throw error;
        console.log('User info is: ', rows);
    });
    db.end();
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
