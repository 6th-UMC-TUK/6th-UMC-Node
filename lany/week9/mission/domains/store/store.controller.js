import { status } from "../../config/reponse.status.js";
import { response } from "../../config/reponse.js";
import { registerStore } from "./store.service.js";

export const registerStoreController = async (req, res, next) => {
  console.log("가게 등록을 요청했습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

  res.send(response(status.SUCCESS, await registerStore(req.body)));
};
