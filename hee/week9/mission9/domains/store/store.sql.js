// 특정 지역의 가게 추가
export const insertNewStore = `INSERT INTO stores (region, address, name) values (?, ?, ?);`;

// 가게의 리뷰 추가
export const insertNewReview = `INSERT INTO reviews (store_id, content, rating, user_id) values (?, ?, ?, 1);`;

// 가게의 미션 생성
export const insertNewMission = `INSERT INTO missions (store_id, title, description) values (?, ?, ?);`;

// 유저가 가게의 미션을 도전중인 목록에 추가
export const insertNewChallenge = `INSERT INTO mission_challenges (mission_id, user_id) values (?, 1);`;

// 새로 가게 추가 시 이미 존재하는 가게인지 조회
export const isExistAddress = `SELECT EXISTS(SELECT 1 FROM stores WHERE address = ?) as isExistAddress;`;

// DB에 있는 가게인지 조회
export const isExistStore = `SELECT EXISTS(SELECT 1 FROM stores WHERE id = ?) as isExistStore;`;

// 이미 진행중인 미션인지 조회
export const isAlreadyContinue = `SELECT EXISTS(SELECT 1 FROM mission_challenges WHERE mission_id = ? AND user_id = 1) as isAlreadyContinue;`;