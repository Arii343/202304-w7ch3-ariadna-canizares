import { Router as router } from "express";
import { loginUser } from "../../controllers/user/userControllers.js";

export const userRouter = router();

userRouter.post("/login", loginUser);
