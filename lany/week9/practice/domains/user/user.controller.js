import { response } from "../../config/reponse.js";
import { status } from "../../config/reponse.status.js";
import { signupUser } from "../user/user.service.js";

export const userSignup = async (req, res, next) => {
  console.log("회원가입을 요청하였습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

  res.send(response(status.SUCCESS, await signupUser(req.body)));
};
