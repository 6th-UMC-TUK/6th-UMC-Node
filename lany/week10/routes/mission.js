import asyncHandler from "express-async-handler";
import express from "express";

import { checkMissionController } from "../domains/mission/mission.controller.js";

export const missionRouter = express.Router();

// 특정 가게의 미션을 조회하는 API
missionRouter.get("/:store_id/list", asyncHandler(checkMissionController));
