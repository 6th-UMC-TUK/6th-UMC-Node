import pool from '../../config/db.config.js';

export const addMission = async (storeId, title, description) => {
    const [result] = await pool.query(
        'INSERT INTO missions (store_id, title, description) VALUES (?, ?, ?)',
        [storeId, title, description]
    );
    return result;
};

export const addMissionChallenge = async (missionId, userId) => {
    const [result] = await pool.query(
        'INSERT INTO mission_challenges (mission_id, user_id) VALUES (?, ?)',
        [missionId, userId]
    );
    return result;
};
