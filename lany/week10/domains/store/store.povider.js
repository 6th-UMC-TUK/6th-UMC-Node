import { BaseError } from "../../config/error.js";
import { status } from "../../config/reponse.status.js";
import { getReview } from "./store.dao.js";
import { getStoreReviewDTO } from "./store.dto.js";

export const getStoreReview = async (store_id, review_id, size) => {
  const result = await getReview(store_id, review_id, size);

  if (result === -1) {
    throw new BaseError(status.STORE_IS_NOT_EXIST);
  }

  return getStoreReviewDTO(result);
};
