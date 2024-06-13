import { BaseError } from "../../config/error.js";
import { status } from "../../config/reponse.status.js";
import { getMyReviewDAO, getReview } from "./store.dao.js";
import { getMyReviewDTO, getStoreReviewDTO } from "./store.dto.js";

export const getStoreReview = async (store_id, query) => {
  const result = await getReview(store_id, query);

  if (result === -1) {
    throw new BaseError(status.STORE_IS_NOT_EXIST);
  }

  return getStoreReviewDTO(result);
};

export const getMyReview = async (query) => {
  const result = await getMyReviewDAO(query);

  if (result === -1) {
    throw new BaseError(status.USER_IS_NOT_EXIST);
  }

  return getMyReviewDTO(result);
};
