import { pool } from './database.js';
import { getReviewQuery } from './store.sql.js';
import { getMissionQuery } from './store.sql.js';

export const getMissionData = async (cursor, limit, storename, point, storeTypes) => {
  try {
    const [missions] = await pool.query(getMissionQuery, [cursor || 0, limit || 10, storename, point, storeTypes.join(',')]);
    return missions;
  } catch (error) {
    throw new Error('Database query failed');
  }
};

export const getReviewData = async (cursor, limit) => {
  try {
    const [reviews] = await pool.query(getReviewQuery, [cursor, limit]);
    return reviews;
  } catch (error) {
    throw new Error('Database query failed');
  }
};
