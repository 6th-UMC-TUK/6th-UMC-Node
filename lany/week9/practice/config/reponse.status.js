import { StatusCodes } from "http-status-codes";

export const status = {
  // success
  SUCCESS: { status: StatusCodes.OK, isSuccess: true, code: 200, message: "success!" },

  // error
  // common err
  INTERNAL_SERVER_ERROR: { status: StatusCodes.INTERNAL_SERVER_ERROR, isSuccess: false, code: "COMMON000", message: "서버 에러, 관리자에게 문의 바랍니다." },
  BAD_REQUEST: { status: StatusCodes.BAD_REQUEST, isSuccess: false, code: "COMMON001", message: "잘못된 요청입니다." },
  UNAUTHORIZED: { status: StatusCodes.UNAUTHORIZED, isSuccess: false, code: "COMMON002", message: "권한이 잘못되었습니다." },
  METHOD_NOT_ALLOWED: { status: StatusCodes.METHOD_NOT_ALLOWED, isSuccess: false, code: "COMMON003", message: "지원하지 않는 Http Method 입니다." },
  FORBIDDEN: { status: StatusCodes.FORBIDDEN, isSuccess: false, code: "COMMON004", message: "금지된 요청입니다." },
  NOT_FOUND: { status: StatusCodes.NOT_FOUND, isSuccess: false, code: "COMMON005", message: "요청한 페이지를 찾을 수 없습니다." },

  // user err
  EMAIL_ALREADY_EXIST: { status: StatusCodes.CONFLICT, isSuccess: false, code: "USER401", message: "이미 존재하는 이메일입니다." },
  PARAMETER_IS_WRONG: { status: StatusCodes.BAD_REQUEST, isSuccess: false, code: "USER402", message: "파라미터를 확인해 주세요." },
};
