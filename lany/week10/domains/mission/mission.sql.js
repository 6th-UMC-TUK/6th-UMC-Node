export const checkMissionSQL = `SELECT m.title, m.description, m.id
FROM missions m
JOIN stores s
ON m.store_id = s.id
WHERE s.id = ?
LIMIT ?
OFFSET ?;`;

export const checkOngoingMissionSQL = `SELECT m.id AS mission_id, m.title, m.description, mc.status, mc.created_at
FROM mission_challenges mc
JOIN missions m ON mc.mission_id = m.id
WHERE mc.user_id = 1 AND mc.status = '진행중'
ORDER BY mc.created_at DESC
LIMIT ?
OFFSET ?;
`;

// 존재하는 유저인지 조회
export const isExistUser = `SELECT EXISTS(SELECT 1 FROM users WHERE id = 1) as isExistUser;`;
