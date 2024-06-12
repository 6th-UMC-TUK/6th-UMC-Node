import express from 'express';
import storeRoutes from './src/routes/storeRoutes.js';
import missionRoutes from './src/routes/missionRoutes.js';

const app = express();

// JSON 형식의 요청 본문 파싱
app.use(express.json());

// URL 인코딩된(form-urlencoded) 형식의 요청 본문 파싱
app.use(express.urlencoded({ extended: true }));

app.use('/api/stores', storeRoutes);
app.use('/api/mission', missionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
