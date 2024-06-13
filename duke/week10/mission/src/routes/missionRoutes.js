import express from 'express';
import { createMissionChallenge,listStoreMissions, listUserMissions, updateMissionChallenge } from '../controllers/missionController.js';

const router = express.Router();

router.post('/:missionId/challenges', createMissionChallenge);
router.get('/stores/:storeId/missions', listStoreMissions);
router.get('/users/:userId/missions', listUserMissions);
router.put('/missions/:missionId/challenges/:userId', updateMissionChallenge);

export default router;
