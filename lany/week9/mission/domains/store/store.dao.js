import { insertNewMission, insertNewReview, insertNewStore, isExistAddress, isExistStore } from "./store.sql.js";
import { pool } from "../../config/db.config.js";

// 가게 추가하기
export const registerNewStore = async (body) => {
  try {
    const connection = await pool.getConnection();

    const [isExist] = await pool.query(isExistAddress, body.address);

    if (isExist[0].isExistAddress) {
      return -1;
    }

    const result = await pool.query(insertNewStore, [body.region, body.address, body.name]);

    connection.release();
    return result[0].insertId;
  } catch (err) {
    throw new Error(err);
  }
};

// 가게에 리뷰 추가
export const addNewReview = async (body) => {
  try {
    const connection = await pool.getConnection();

    // 가게가 존재하는지 확인하는 부분
    const [isExist] = await pool.query(isExistStore, body.store_id);

    if (!isExist[0].isExistStore) {
      return -1;
    }

    const result = await pool.query(insertNewReview, [body.store_id, body.content, body.rating]);

    connection.release();
    return result[0].insertId;
  } catch (err) {
    throw new Error(err);
  }
};

// 가게에 미션 추가
export const addNewMission = async (body) => {
  try {
    const connection = await pool.getConnection();

    // 가게가 존재하는지 확인하는 부분
    const [isExist] = await pool.query(isExistStore, body.store_id);

    if (!isExist[0].isExistStore) {
      return -1;
    }

    const result = await pool.query(insertNewMission, [body.store_id, body.title, body.description]);

    connection.release();
    return result[0].insertId;
  } catch (err) {
    throw new Error(err);
  }
};
