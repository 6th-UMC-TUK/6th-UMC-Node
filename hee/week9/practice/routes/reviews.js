const express = require('express');
const router = express.Router();

let reviews = []; // 실제 프로덕션에서는 데이터베이스를 사용해야 합니다.

// 리뷰 추가 API
router.post('/api/reviews', (req, res) => {
    const { store_name, rating, review_content, photos } = req.body;

    // 간단한 유효성 검사
    if (!store_name || rating === undefined || !review_content) {
        return res.status(400).json({ error: '필수 필드가 누락되었습니다.' });
    }

    const newReview = {
        id: reviews.length + 1, // 실제 데이터베이스를 사용할 때는 고유 ID 생성 방식을 따라야 합니다.
        store_name,
        rating,
        review_content,
        photos
    };

    reviews.push(newReview);

    res.status(201).json(newReview);
});

module.exports = router;
