import { addChallengeMissionResponseDTO, addMissionResponseDTO, addReviewResponseDTO, registerStoreResponseDTO } from "./store.dto.js";
import { addNewChallengeMission, addNewMission, addNewReview, registerNewStore } from "./store.dao.js";
import { status } from "../../config/response.status.js";
import { BaseError } from "../../config/error.js";

// 가게 등록 service
export const registerStore = async (body) => {
  const result = await registerNewStore(body);

  if (result === -1) {
    throw new BaseError(status.ADDRESS_ALREADY_EXIST);
  }

  return registerStoreResponseDTO(result);
};

// 가게 리뷰 service
export const addReview = async (body) => {
  const result = await addNewReview(body);

  if (result === -1) {
    throw new BaseError(status.STORE_IS_NOT_EXIST);
  }

  return addReviewResponseDTO(result);
};

// 가게 미션 추가 service
export const addMission = async (body) => {
  const result = await addNewMission(body);

  if (result === -1) {
    throw new BaseError(status.STORE_IS_NOT_EXIST);
  }

  return addMissionResponseDTO(result);
};

// 가게의 미션을 유저가 도전 중인 미션 목록에 추가 service
export const addChallengeMission = async (body) => {
  const result = await addNewChallengeMission(body);

  if (result === -1) {
    throw new BaseError(status.STORE_IS_NOT_EXIST);
  } else if (result === -2) {
    throw new BaseError(status.MISSION_ALREADY_EXIST);
  }

  return addChallengeMissionResponseDTO(result);
};