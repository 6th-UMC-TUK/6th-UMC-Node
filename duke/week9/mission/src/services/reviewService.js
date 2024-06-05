import pool from '../../config/db.config.js';

export const addReview = async (storeId, content, rating, userId) => {
    const [result] = await pool.query(
        'INSERT INTO reviews (store_id, content, rating, user_id) VALUES (?, ?, ?, ?)',
        [storeId, content, rating, userId]
    );
    return result;
};