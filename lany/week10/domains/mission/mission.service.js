import { BaseError } from "../../config/error.js";
import { status } from "../../config/reponse.status.js";
import { updateStatusDAO } from "./mission.dao.js";

export const updateStatus = async (body) => {
  const result = await updateStatusDAO(body);

  if (result === -1) throw new BaseError(status.MISSION_IS_NOT_EXIST);
  else if (result === -2) throw new BaseError(status.ALREADY_COMPLETED_MISSION);

  return;
};
