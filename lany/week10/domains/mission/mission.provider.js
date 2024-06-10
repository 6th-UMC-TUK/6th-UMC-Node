import { BaseError } from "../../config/error.js";
import { status } from "../../config/reponse.status.js";
import { checkMissionDAO } from "./mission.dao.js";
import { checkMissionDTO } from "./mission.dto.js";

export const checkMission = async (store_id, query) => {
  const result = await checkMissionDAO(store_id, query);

  if (result === -1) throw new BaseError(status.STORE_IS_NOT_EXIST);

  return checkMissionDTO(result);
};
