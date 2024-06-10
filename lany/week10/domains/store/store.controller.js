import { addChallengeMission, addMission, addReview, registerStore } from "./store.service.js";
import { status } from "../../config/reponse.status.js";
import { response } from "../../config/reponse.js";
import { getStoreReview } from "./store.povider.js";

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

// 가게에 미션 추가하기 controller
export const addMissionController = async (req, res, next) => {
  console.log("가게 미션 추가를 요청했습니다!");
  console.log("body", req.body);

  res.send(response(status.SUCCESS, await addMission(req.body)));
};

// 가게의 미션을 유저가 도전 중인 미션 목록에 추가하기 controller
export const addChallengeMissionController = async (req, res, next) => {
  console.log("유저가 도전중인 목록에 미션 추가를 요청했습니다!");
  console.log("body", req.body);

  res.send(response(status.SUCCESS, await addChallengeMission(req.body)));
};

// 가게의 리뷰를 가져오는 API
export const getStoreReviewController = async (req, res, next) => {
  console.log("가게의 리뷰를 조회했습니다!");
  console.log("params", req.params, req.query);

  res.send(response(status.SUCCESS, await getStoreReview(req.params.store_id, req.query.review_id, req.query.size)));
};
