import { response } from "../../config/reponse.js";
import { status } from "../../config/reponse.status.js";
import { checkMission, checkOngoingMission } from "./mission.provider.js";
import { updateStatus } from "./mission.service.js";

export const checkMissionController = async (req, res, next) => {
  console.log("가게의 미션을 조회했습니다.");
  console.log(req.params, req.query);

  res.send(response(status.SUCCESS, await checkMission(req.params.store_id, req.query)));
};

export const checkOngoingMissionController = async (req, res, next) => {
  console.log("진행중인 미션을 조회했습니다.");
  console.log(req.query);

  res.send(response(status.SUCCESS, await checkOngoingMission(req.query)));
};

export const updateStatusController = async (req, res, next) => {
  console.log("진행중인 미션을 진행 완료로 바꾸기를 요청했습니다.");
  console.log(req.body);

  res.send(response(status.SUCCESS, await updateStatus(req.body)));
};
