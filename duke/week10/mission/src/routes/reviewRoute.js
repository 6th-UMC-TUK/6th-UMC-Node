import express from 'express';
import { listUserReviews } from '../controllers/reviewController';

const router = express.Router();

router.get('/users/:userId/reviews', listUserReviews);

export default router;
