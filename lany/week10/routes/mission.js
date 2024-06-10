import asyncHandler from "express-async-handler";
import express from "express";

import { checkMissionController, checkOngoingMissionController } from "../domains/mission/mission.controller.js";

export const missionRouter = express.Router();

// 특정 가게의 미션을 조회하는 API
missionRouter.get("/:store_id/list", asyncHandler(checkMissionController));

// 내가 진행중인 미션 목록
missionRouter.get("/ongoing", asyncHandler(checkOngoingMissionController));
