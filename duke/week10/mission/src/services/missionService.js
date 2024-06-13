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

export const getStoreMissions = async (storeId, limit, offset) => {
    const [missions] = await pool.query(
        'SELECT * FROM missions WHERE store_id = ? LIMIT ? OFFSET ?',
        [storeId, limit, offset]
    );
    return missions;
};

export const getUserMissions = async (userId, limit, offset) => {
    const [missions] = await pool.query(
        'SELECT * FROM mission_challenges WHERE user_id = ? LIMIT ? OFFSET ?',
        [userId, limit, offset]
    );
    return missions;
};

export const completeMissionChallenge = async (missionId, userId) => {
    const [result] = await pool.query(
        'UPDATE mission_challenges SET status = "완료" WHERE mission_id = ? AND user_id = ? AND status = "진행중"',
        [missionId, userId]
    );
    return result;
};
