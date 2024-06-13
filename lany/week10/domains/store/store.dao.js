import {
  getMyReviewSQL,
  insertNewChallenge,
  insertNewMission,
  insertNewReview,
  insertNewStore,
  isAlreadyContinue,
  isExistAddress,
  isExistStore,
  selectStoreReview,
  selectStoreReviewAtFirst,
} from "./store.sql.js";
import { pool } from "../../config/db.config.js";
import { isExistUser } from "../mission/mission.sql.js";

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

// 가게의 미션을 유저가 도전 중인 미션 목록에 추가
export const addNewChallengeMission = async (body) => {
  try {
    const connection = await pool.getConnection();

    // 가게가 존재하는지 확인하는 부분
    const [storeExist] = await pool.query(isExistStore, body.store_id);

    if (!storeExist[0].isExistStore) {
      return -1;
    }

    // 유저가 현재 미션을 진행하고 있는지 확인하는 부분
    const [missionExist] = await pool.query(isAlreadyContinue, body.mission_id);
    if (missionExist[0].isAlreadyContinue) {
      return -2;
    }

    const result = await pool.query(insertNewChallenge, body.mission_id);

    connection.release();
    return result[0].insertId;
  } catch (err) {
    throw new Error(err);
  }
};

export const getReview = async (store_id, query) => {
  const { size = 3, rating = 5 } = query;
  const cursor_id = query["review-id"];
  try {
    const connection = await pool.getConnection();

    // 가게가 존재하는지 확인하는 부분
    const [storeExist] = await pool.query(isExistStore, store_id);

    if (!storeExist[0].isExistStore) {
      return -1;
    }

    if (cursor_id === null || cursor_id === undefined) {
      const [result] = await pool.query(selectStoreReviewAtFirst, [+store_id, +size]);
      connection.release();
      return result;
    } else {
      const [result] = await pool.query(selectStoreReview, [+store_id, +rating, +cursor_id, +size]);
      connection.release();
      return result;
    }
  } catch (err) {
    throw new Error(err);
  }
};

export const getMyReviewDAO = async (query) => {
  const { page, size = 3 } = query;
  const offset = (+page - 1) * +size;
  try {
    const connection = await pool.getConnection();

    // 존재하는 유저인지 확인하는 부분
    const [userExist] = await pool.query(isExistUser);

    if (!userExist[0].isExistUser) {
      return -1;
    }

    const [result] = await pool.query(getMyReviewSQL, [+size, offset]);

    connection.release();
    return result;
  } catch (err) {
    throw new Error(err);
  }
};
