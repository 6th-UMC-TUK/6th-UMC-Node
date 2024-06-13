import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '11111111',
    database: 'tempDB'
});

export default pool;