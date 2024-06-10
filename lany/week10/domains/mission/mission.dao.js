import { pool } from "../../config/db.config.js";
import { isExistStore } from "../store/store.sql.js";
import { checkMissionSQL } from "./mission.sql.js";

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
