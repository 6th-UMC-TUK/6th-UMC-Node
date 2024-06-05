import asyncHandler from "express-async-handler";
import express from "express";

import { addReviewController, registerStoreController } from "../domains/store/store.controller.js";

export const storeRouter = express.Router();

// 특정 지역에 가게 추가하기 API
storeRouter.post("/register", asyncHandler(registerStoreController));

// 가게에 리뷰 추가하기 API
storeRouter.post("/review", asyncHandler(addReviewController));
