import { getReviewData } from './store.dao.js';
import { reviewResponseDTO } from './store.dto.js';
import { missionResponseDTO } from './store.dto.js';

export const fetchMissionList = async (cursor, limit, storename, point, storeTypes) => {
  const missions = await getMissionData(cursor, limit, storename, point, storeTypes);
  return missionResponseDTO(missions);
};

export const fetchReviewList = async (cursor, limit) => {
  const reviews = await getReviewData(cursor, limit);
  return reviewResponseDTO(reviews);
};
