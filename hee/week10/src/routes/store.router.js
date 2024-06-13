import express from 'express';
import asyncHandler from 'express-async-handler';

export const storeRouter = express.Router();

// 리뷰 목록 조회 핸들러
const reviewPreview = asyncHandler(async (req, res) => {
  const reviews = [
    {
      nickname: "유엠씨미션10주차입니다.",
      rating: "5",
      reviewDate: "2024-06-12",
      reviewDetail: "사장님너무맛있어요"
    }
  ];
  res.json(reviews);
});

// 미션 목록 조회 핸들러
const missionList = asyncHandler(async (req, res) => {
  const missions = [
    {
      storename: "투썸플레이스사당역점",
      point: "500p",
      storeTypes: ["중식", "일식", "한식", "양식", "동남아식"]
    }
  ];
  res.json(missions);
});

// 리뷰 목록 조회 라우트
storeRouter.get('/review', reviewPreview);

// 미션 목록 조회 라우트
storeRouter.get('/mission', missionList);
