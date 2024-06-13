import { BaseError } from "../../config/error.js";
import { status } from "../../config/reponse.status.js";
import { checkMissionDAO, checkOngoingMissionDAO } from "./mission.dao.js";
import { checkMissionDTO, checkOngoingMissionDTO } from "./mission.dto.js";

export const checkMission = async (store_id, query) => {
  const result = await checkMissionDAO(store_id, query);

  if (result === -1) throw new BaseError(status.STORE_IS_NOT_EXIST);

  return checkMissionDTO(result);
};

export const checkOngoingMission = async (query) => {
  const result = await checkOngoingMissionDAO(query);

  if (result === -1) throw new BaseError(status.USER_IS_NOT_EXIST);

  return checkOngoingMissionDTO(result);
};
