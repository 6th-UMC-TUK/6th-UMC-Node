import { addReviewResponseDTO, registerStoreResponseDTO } from "./store.dto.js";
import { status } from "../../config/reponse.status.js";
import { addNewReview, registerNewStore } from "./store.dao.js";
import { BaseError } from "../../config/error.js";

export const registerStore = async (body) => {
  const result = await registerNewStore(body);

  if (result === -1) {
    throw new BaseError(status.ADDRESS_ALREADY_EXIST);
  }

  return registerStoreResponseDTO(result);
};

export const addReview = async (body) => {
  const result = await addNewReview(body);

  if (result === -1) {
    throw new BaseError(status.STORE_IS_NOT_EXIST);
  }

  return addReviewResponseDTO(result);
};
