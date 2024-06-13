import { addReview,getUserReviews } from '../services/reviewService.js';

export const createReview = async (req, res) => {
    const { storeId } = req.params;
    const { content, rating, userId } = req.body;

    console.log(content, rating, userId );
    if (!content || !rating || !userId) {
        return res.status(400).json({ message: '모든 필드를 입력해 주세요.' });
    }

    try {
        const result = await addReview(storeId, content, rating, userId);
        res.status(201).json({
            id: result.insertId,
            store_id: storeId,
            content,
            rating,
            user_id: userId,
            created_at: new Date()
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '서버 오류' });
    }
};
export const listUserReviews = async (req, res) => {
    const { userId } = req.params;
    const { page = 1, size = 10 } = req.query;
    const limit = parseInt(size);
    const offset = (parseInt(page) - 1) * limit;

    try {
        const reviews = await getUserReviews(userId, limit, offset);
        res.status(200).json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '서버 오류' });
    }
};
