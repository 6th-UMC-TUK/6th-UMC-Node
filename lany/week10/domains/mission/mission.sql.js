export const checkMissionSQL = `SELECT m.title, m.description, m.id
FROM missions m
JOIN stores s
ON m.store_id = s.id
WHERE s.id = ?
LIMIT ?
OFFSET ?;`;
