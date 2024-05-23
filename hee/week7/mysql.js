var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '자기비밀번호넣으세요', 
  database : 'nodestudymission7'
});

connection.connect();

connection.query('SELECT * FROM nodestudymission7.mission7', function(err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});

connection.end();

