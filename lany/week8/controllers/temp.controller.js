import { status } from "../config/reponse.status.js";
import { checkFlag, getTempData } from "../services/temp.service.js";
import { response } from "../config/reponse.js";

export const tempTest = (req, res, next) => {
  res.send(response(status.SUCCESS, getTempData()));
};

export const tempException = (req, res, next) => {
  console.log("/temp/exception/" + req.params.flag);
  return res.send(response(status.SUCCESS, checkFlag(req.params.flag)));
};
