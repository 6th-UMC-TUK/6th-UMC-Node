import pool from '../../config/db.config.js';

export const addStore = async (region, address, name) => {
    const [result] = await pool.query(
        'INSERT INTO stores (region, address, name) VALUES (?, ?, ?)',
        [region, address, name]
    );
    return result;
};