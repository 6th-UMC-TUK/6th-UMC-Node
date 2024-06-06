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
/**
 * @swagger
 * /api/reviews:
 *   post:
 *     summary: 리뷰 추가
 *     description: 새로운 리뷰를 추가합니다.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - store_name
 *               - rating
 *               - review_content
 *             properties:
 *               store_name:
 *                 type: string
 *                 description: 가게 이름
 *               rating:
 *                 type: number
 *                 description: 평점
 *               review_content:
 *                 type: string
 *                 description: 리뷰 내용
 *               photos:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: 사진 URL 배열 (선택 사항)
 *     responses:
 *       201:
 *         description: 리뷰가 성공적으로 추가되었습니다.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 store_name:
 *                   type: string
 *                 rating:
 *                   type: number
 *                 review_content:
 *                   type: string
 *                 photos:
 *                   type: array
 *                   items:
 *                     type: string
 *       400:
 *         description: 필요한 필드가 누락되었습니다.
 */