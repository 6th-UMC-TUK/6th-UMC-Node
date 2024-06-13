// 특정 지역의 가게 추가
export const insertNewStore = `INSERT INTO stores (region, address, name) values (?, ?, ?);`;

// 가게의 리뷰 추가
export const insertNewReview = `INSERT INTO reviews (store_id, content, rating, user_id) values (?, ?, ?, 1);`;

// 가게의 미션 생성
export const insertNewMission = `INSERT INTO missions (store_id, title, description) values (?, ?, ?);`;

// 유저가 가게의 미션을 도전중인 목록에 추가
export const insertNewChallenge = `INSERT INTO mission_challenges (mission_id, user_id) values (?, 1);`;

// 최초 가게 리뷰 조회
export const selectStoreReviewAtFirst = `SELECT u.nickname, r.content, r.created_at, r.rating, r.id
FROM reviews as r
JOIN users as u ON u.id = r.user_id
WHERE r.store_id = ?
ORDER BY r.rating DESC
LIMIT ?;
`;

// 페이징을 이용한 가게 리뷰 조회
export const selectStoreReview = `SELECT u.nickname, r.content, r.created_at, r.rating, r.id
FROM reviews as r
JOIN users as u ON u.id = r.user_id
WHERE r.store_id = ?
  AND (r.rating < ? OR (r.rating = ? AND r.id < ?))
ORDER BY r.rating DESC, r.id DESC
LIMIT ?;
`;

// 페이징을 이용한 내가 작성한 리뷰 조회
export const getMyReviewSQL = `SELECT r.store_id, r.content, r.rating, r.created_at
FROM reviews r
JOIN users u
ON r.user_id = u.id
WHERE u.id = 1
LIMIT ?
OFFSET ?;`;

// 새로 가게 추가 시 이미 존재하는 가게인지 조회
export const isExistAddress = `SELECT EXISTS(SELECT 1 FROM stores WHERE address = ?) as isExistAddress;`;

// DB에 있는 가게인지 조회
export const isExistStore = `SELECT EXISTS(SELECT 1 FROM stores WHERE id = ?) as isExistStore;`;

// 이미 진행중인 미션인지 조회
export const isAlreadyContinue = `SELECT EXISTS(SELECT 1 FROM mission_challenges WHERE mission_id = ? AND user_id = 1) as isAlreadyContinue;`;
