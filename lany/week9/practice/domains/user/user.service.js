import { BaseError } from "../../config/error.js";
import { status } from "../../config/reponse.status.js";
import { addUser, setPrefer, getUser, getUserPreferToUserID } from "./user.dao.js";
import { signupResponseDTO } from "./user.dto.js";

export const signupUser = async (body) => {
  const birth = new Date(body.birthYear, body.birthMonth, body.birthDay);
  const prefer = body.prefer;

  const joinUserData = await addUser({
    ...body, // body에 있는 변수들 spread 연산자로 풀어넣기
    birth: birth,
  });
  if (joinUserData == -1) {
    throw new BaseError(status.EMAIL_ALREADY_EXIST);
  } else {
    for (let i = 0; i < prefer.length; i++) {
      await setPrefer(joinUserData, prefer[i]);
    }
    return signupResponseDTO(await getUser(joinUserData), await getUserPreferToUserID(joinUserData));
  }
};
