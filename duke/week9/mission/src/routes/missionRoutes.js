import express from 'express';
import { createMissionChallenge } from '../controllers/missionController.js';

const router = express.Router();

router.post('/:missionId/challenges', createMissionChallenge);

export default router;
