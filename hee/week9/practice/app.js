const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const shopRoutes = require('./routes/shop');
const reviewsRouter = require('./routes/reviews');
const missionsRouter = require('./routes/missions');


const app = express();
const port = process.env.PORT || 3000;

const { specs } = require('./config/swagger.config.js');
const SwaggerUi = require('swagger-ui-express');

// JSON 파싱 미들웨어 추가
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended: false}));

// DB 연결 (Sequelize)
const { sequelize } = require('./models');
sequelize.sync();
// swagger
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs));


// 라우트 설정
app.use('/api/shops', shopRoutes);
app.use('/api/reviews', reviewsRouter);
app.use('/api/missions', missionsRouter)

// 서버 실행
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

