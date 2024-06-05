import { status } from "../../config/reponse.status.js";
import { response } from "../../config/reponse.js";
import { addReview, registerStore } from "./store.service.js";

// 가게 등록 controller
export const registerStoreController = async (req, res, next) => {
  console.log("가게 등록을 요청했습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

  res.send(response(status.SUCCESS, await registerStore(req.body)));
};

// 가게에 리뷰 추가하기 controller
export const addReviewController = async (req, res, next) => {
  console.log("가게에 리뷰 추가를 요청했습니다!");
  console.log("body", req.body);

  res.send(response(status.SUCCESS, await addReview(req.body)));
};
