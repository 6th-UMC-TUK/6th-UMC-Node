export const getReviewQuery = `
  SELECT id, nickname, rating, reviewDate, reviewDetail
  FROM reviews
  WHERE id > ?
  ORDER BY id ASC
  LIMIT ?;
`;

export const getMissionQuery = `
  SELECT id, storename, point, storeTypes
  FROM missions
  WHERE id > ? AND storename = ? AND point = ? AND FIND_IN_SET(storeTypes, ?)
  ORDER BY id ASC
  LIMIT ?;
`;