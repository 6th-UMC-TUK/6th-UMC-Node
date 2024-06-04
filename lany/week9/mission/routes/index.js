import asyncHandler from "express-async-handler";
import express from "express";

import { registerStoreController } from "../domains/store/store.controller.js";

export const storeRouter = express.Router();

// 특정 지역에 가게 추가하기 API
storeRouter.post("/register", asyncHandler(registerStoreController));
