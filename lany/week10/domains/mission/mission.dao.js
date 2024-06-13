import { pool } from "../../config/db.config.js";
import { isExistStore } from "../store/store.sql.js";
import { checkMissionSQL, checkOngoingMissionSQL, isCompletedMission, isExistMission, isExistUser, updateStatusSQL } from "./mission.sql.js";

export const checkMissionDAO = async (store_id, query) => {
  const { page, size = 3 } = query;
  const offset = (+page - 1) * +size;
  try {
    const connection = await pool.getConnection();

    const [storeExist] = await pool.query(isExistStore, store_id);

    if (!storeExist[0].isExistStore) {
      return -1;
    }

    const [result] = await pool.query(checkMissionSQL, [+store_id, +size, offset]);

    connection.release();

    return result;
  } catch (err) {
    throw new Error(err);
  }
};

export const checkOngoingMissionDAO = async ({ size, page }) => {
  const offset = (+page - 1) * +size;
  try {
    const connection = await pool.getConnection();

    const [userExist] = await pool.query(isExistUser);

    if (!userExist[0].isExistUser) {
      return -1;
    }

    const [result] = await pool.query(checkOngoingMissionSQL, [+size, offset]);

    connection.release();

    return result;
  } catch (err) {
    throw new Error(err);
  }
};

export const updateStatusDAO = async ({ id }) => {
  try {
    const connection = await pool.getConnection();

    const [missionExist] = await pool.query(isExistMission, id);

    if (!missionExist[0].isExistMission) {
      return -1;
    }

    const [completedMission] = await pool.query(isCompletedMission, id);

    if (!completedMission[0].isCompletedMission) {
      return -2;
    }

    const [result] = await pool.query(updateStatusSQL, id);

    connection.release();

    return result;
  } catch (err) {
    throw new Error(err);
  }
};
