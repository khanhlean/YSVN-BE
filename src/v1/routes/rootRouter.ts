import express from "express";
import stockRouter from "./stockRouter";
import chartRouter from "./chartRouter";
import authRouter from "./authRouter";

const rootRouter = express.Router();

rootRouter.use("/stock", stockRouter);
rootRouter.use("/chart", chartRouter);
rootRouter.use("/auth", authRouter);

export default rootRouter;
