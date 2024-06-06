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
