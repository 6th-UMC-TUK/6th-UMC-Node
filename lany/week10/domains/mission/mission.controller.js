import { response } from "../../config/reponse.js";
import { status } from "../../config/reponse.status.js";
import { checkMission } from "./mission.provider.js";

export const checkMissionController = async (req, res, next) => {
  console.log("가게의 미션을 조회했습니다.");
  console.log(req.params, req.query);

  res.send(response(status.SUCCESS, await checkMission(req.params.store_id, req.query)));
};
