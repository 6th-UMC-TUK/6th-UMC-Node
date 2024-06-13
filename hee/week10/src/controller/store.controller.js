import express from 'express';
import { fetchReviewList } from './store.provider.js';

const router = express.Router();

router.get('/review', async (req, res) => {
  try {
    const { cursor, limit } = req.query;
    const reviews = await fetchReviewList(cursor, limit);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/mission', async (req, res) => {
    try {
      const { cursor, limit } = req.query;
      const { storename, point, storeTypes } = req.body;
      const missions = await fetchMissionList(cursor, limit, storename, point, storeTypes);
      res.status(200).json(missions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

export default router;
