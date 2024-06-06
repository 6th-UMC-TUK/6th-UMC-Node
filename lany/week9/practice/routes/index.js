import express from "express";
import asyncHandler from "express-async-handler";
import { userSignup } from "../domains/user/user.controller.js";

export const userRouter = express.Router();

userRouter.post("/signup", asyncHandler(userSignup));
