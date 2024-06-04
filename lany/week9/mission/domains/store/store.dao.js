import { insertNewStore, isExistAddress } from "./store.sql.js";
import { pool } from "../../config/db.config.js";

export const registerNewStore = async (body) => {
  try {
    const connection = await pool.getConnection();

    const [isExist] = await pool.query(isExistAddress, [body.address]);

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
