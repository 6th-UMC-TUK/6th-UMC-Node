import asyncHandler from "express-async-handler";
import express from "express";

import {
  addChallengeMissionController,
  addMissionController,
  addReviewController,
  getMyReviewController,
  getStoreReviewController,
  registerStoreController,
} from "../domains/store/store.controller.js";

export const storeRouter = express.Router();

// 특정 지역에 가게 추가하기 API
storeRouter.post("/register", asyncHandler(registerStoreController));

// 가게에 리뷰 추가하기 API
storeRouter.post("/review", asyncHandler(addReviewController));

// 가게에 미션 추가하기 API
storeRouter.post("/mission", asyncHandler(addMissionController));

// 가게의 미션을 유저가 도전 중인 미션 목록에 추가하는 API
storeRouter.post("/challenge-mission", asyncHandler(addChallengeMissionController));

// 내가 작성한 리뷰를 가져오는 API
storeRouter.get("/my-review", asyncHandler(getMyReviewController));

// 가게의 리뷰를 가져오는 API
storeRouter.get("/:store_id", asyncHandler(getStoreReviewController));
