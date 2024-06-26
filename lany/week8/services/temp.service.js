import { BaseError } from "../config/error.js";
import { status } from "../config/reponse.status.js";
import { flagResponseDTO, tempResponseDTO } from "../dtos/temp.response.dto.js";

export const getTempData = () => {
  return tempResponseDTO("This is TEST! >.0");
};

export const checkFlag = (flag) => {
  if (flag == 1) throw new BaseError(status.BAD_REQUEST); // 에러 발생시키기!
  else {
    return flagResponseDTO(flag);
  }
};
