import express from 'express';
import { createStore } from '../controllers/storeController.js';
import { createReview } from '../controllers/reviewController.js';
import { createMission } from '../controllers/missionController.js';
const router = express.Router();

router.post('/', createStore);
router.post('/:storeId/missions', createMission);
router.post('/:storeId/reviews', createReview);

export default router;
