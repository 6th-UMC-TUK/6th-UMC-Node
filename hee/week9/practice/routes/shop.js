const express = require('express');
const router = express.Router();

// 리뷰 라우트
router.get('/:shopId/reviews', (req, res) => {
  // 리뷰 데이터를 처리하는 로직
  res.send('리뷰 데이터를 반환합니다.');
});

// 미션 라우트
router.get('/:shopId/missions', (req, res) => {
  // 미션 데이터를 처리하는 로직
  res.send('미션 데이터를 반환합니다.');
});

// Challenge route
router.get('/:shopId/missions/:missionId/challenge', (req, res) => {
    // Logic to handle challenge data
    res.send('Returning challenge data.');
  });

module.exports = router;
