const express = require('express');
const router = express.Router();

let missions = []; // 실제 프로덕션에서는 데이터베이스를 사용해야 합니다.

// 미션 추가 API
router.post('/api/missions', (req, res) => {
    const { store_name, store_type, required_amount, reward_points } = req.body;

    if (!store_name || !store_type || !required_amount || reward_points === undefined) {
        return res.status(400).json({ error: '필수 필드가 누락되었습니다.' });
    }

    const newMission = {
        id: missions.length + 1,
        store_name,
        store_type,
        required_amount,
        reward_points
    };

    missions.push(newMission);

    res.status(201).json(newMission);
});

module.exports = router;

// 미션 도전 API
router.post('/api/missions/:mission_id/challenge', (req, res) => {
    const { mission_id } = req.params;
    const mission = missions.find(m => m.id === parseInt(mission_id));

    if (!mission) {
        return res.status(404).json({ error: '미션을 찾을 수 없습니다.' });
    }

    // 미션 도전 로직 구현 (미션 검증 등)
    // 예시로, 도전 성공으로 가정하고 응답을 보냅니다.
    res.status(200).json({
        mission_id,
        reward_points: mission.reward_points
    });
});

/**
 * @swagger
 * /api/missions:
 *   post:
 *     summary: 미션 추가
 *     description: 새로운 미션을 추가합니다.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - store_name
 *               - store_type
 *               - required_amount
 *               - reward_points
 *             properties:
 *               store_name:
 *                 type: string
 *               store_type:
 *                 type: string
 *               required_amount:
 *                 type: number
 *               reward_points:
 *                 type: number
 *     responses:
 *       201:
 *         description: 미션 생성 성공
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mission'
 *       400:
 *         description: 필수 필드 누락
 * components:
 *   schemas:
 *     Mission:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         store_name:
 *           type: string
 *         store_type:
 *           type: string
 *         required_amount:
 *           type: number
 *         reward_points:
 *           type: number
 */

/**
 * @swagger
 * /api/missions/{mission_id}/challenge:
 *   post:
 *     summary: 미션 도전
 *     description: 특정 미션에 도전합니다.
 *     parameters:
 *       - in: path
 *         name: mission_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: 미션 ID
 *     responses:
 *       200:
 *         description: 도전 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mission_id:
 *                   type: integer
 *                 reward_points:
 *                   type: number
 *       404:
 *         description: 미션을 찾을 수 없음
 */
