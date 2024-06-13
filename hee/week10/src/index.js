import dotenv from 'dotenv';
dotenv.config();    // .env 파일 사용 (환경 변수 관리)

import express from 'express';
import asyncHandler from 'express-async-handler';
import SwaggerUi from 'swagger-ui-express';
import { storeRouter } from './routes/store.router.js';
import YAML from 'yamljs';
import cors from "cors";
import { swaggerSpec } from '../swagger/swagger.config.js';
// import { status } from "../config/reponse.status.js";
// import {response} from "../config/response.js"

const app = express();

// Middleware
app.use(express.json());

// API 엔드포인트 설정
app.get('/store/mission', (req, res) => {
  res.send('Mission endpoint');
});

app.get('/store/review', (req, res) => {
  res.send('Review endpoint');
});

// Router setting
app.use('/store', storeRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석
app.use(cors()); // cors 방식 허용

app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerSpec));
app.use("/store", storeRouter);
// app.use("/mission", missionRouter);

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.data.status || status.INTERNAL_SERVER_ERROR).send(response(err.data));
});

app.listen(app.get("port"), () => {
  console.log(`Example app listening on port ${app.get("port")}`);
});