import { formatDate } from "../../utils/date.js";

export const registerStoreResponseDTO = (storeId) => ({ storeId });

export const addReviewResponseDTO = (storeId) => ({ storeId });

export const addMissionResponseDTO = (storeId) => ({ storeId });

export const addChallengeMissionResponseDTO = (storeId) => ({ storeId });

export const getStoreReviewDTO = (items) => {
  const response = items.map((item) => ({
    nickname: item.nickname,
    content: item.content,
    rating: item.rating,
    date: formatDate(item.created_at),
  }));

  return { reviews: response, cursor: { id: items[items.length - 1].id, rating: items[items.length - 1].rating } };
};

export const getMyReviewDTO = (items) => {
  const response = items.map((item) => ({
    store_id: item.store_id,
    content: item.content,
    rating: item.rating,
    date: formatDate(item.created_at),
  }));

  return response;
};
