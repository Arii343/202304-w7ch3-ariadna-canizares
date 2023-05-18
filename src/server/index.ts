import express from "express";
import morgan from "morgan";
import { userRouter } from "./routers/user/userRouter.js";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/user", userRouter);

export default app;
