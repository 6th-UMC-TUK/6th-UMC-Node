import express from "express";
import mysql from "mysql2";

let response;

// MySQL 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: "localhost",
  user: "lany",
  password: "my_password",
  database: "test_db",
});

// 연결 테스트
connection.connect((err) => {
  if (err) {
    console.error("데이터베이스 연결 실패: ", err);
    return;
  }
  console.log("데이터베이스 연결 성공");
});

// 예시 쿼리 실행
connection.query("SELECT * FROM user", (err, results) => {
  if (err) {
    console.error("쿼리 실행 실패: ", err);
    return;
  }
  response = results;
  console.log("쿼리 결과: ", results);
});

// 연결 종료
connection.end();

const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send(JSON.stringify(response));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
