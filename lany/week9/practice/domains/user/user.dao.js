import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/reponse.status.js";
import { connectFoodCategory, confirmEmail, getUserID, insertUserSql, getPreferToUserID } from "./user.sql.js";

// User 데이터 삽입
export const addUser = async (data) => {
  try {
    const connection = await pool.getConnection();

    const [confirm] = await pool.query(confirmEmail, data.email);

    if (confirm[0].isExistEmail) {
      connection.release();
      return -1;
    }

    const result = await pool.query(insertUserSql, [data.email, data.name, data.gender, data.birth, data.addr, data.specAddr, data.phone]);
    console.log(result);
    connection.release();
    return result[0].insertId;
  } catch (err) {
    throw new Error(err);
  }
};

// 사용자 정보 얻기
export const getUser = async (userId) => {
  try {
    const connection = await pool.getConnection();
    const [user] = await pool.query(getUserID, userId);

    console.log(user);

    if (user.length === 0) {
      return -1;
    }

    connection.release();
    return user;
  } catch (err) {
    // throw new BaseError(status.PARAMETER_IS_WRONG);
    throw new Error(err);
  }
};

// 음식 선호 카테고리 매핑
export const setPrefer = async (userId, foodCategoryId) => {
  try {
    const connection = await pool.getConnection();
    console.log(foodCategoryId, userId);
    await pool.query(connectFoodCategory, [foodCategoryId, userId]);

    connection.release();

    return;
  } catch (err) {
    // throw new BaseError(status.PARAMETER_IS_WRONG);
    throw new Error(err);
  }
};

// 사용자 선호 카테고리 반환
export const getUserPreferToUserID = async (userID) => {
  try {
    const connection = await pool.getConnection();
    const prefer = await pool.query(getPreferToUserID, userID);

    connection.release();

    return prefer;
  } catch (err) {
    // throw new BaseError(status.PARAMETER_IS_WRONG);
    throw new Error(err);
  }
};
