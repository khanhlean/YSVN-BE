import express from "express";
import * as chartController from "../controllers/chartController";

const chartRouter = express.Router();

chartRouter.post(
  "/get-tang-truong-doanh-thu",
  chartController.getChartTangTruongDanhThuController
);
chartRouter.post(
  "/get-tang-truong-loi-nhuan",
  chartController.getChartTangTruongLoiNhuanController
);
chartRouter.post(
  "/get-bien-loi-nhuan",
  chartController.getChartBienLoiNhuanController
);
chartRouter.post("/get-dinh-gia", chartController.getChartDinhGiaController);
chartRouter.post("/get-dong-tien", chartController.getChartDongTienController);
chartRouter.post(
  "/get-hieu-qua-su-dung-von",
  chartController.getChartHieuQuaSuDungVonController
);
chartRouter.post("/get-tai-san", chartController.getChartTaiSanController);
chartRouter.post("/get-nguon-von", chartController.getChartNguonVonController);
chartRouter.post(
  "/get-cau-truc-tai-san",
  chartController.getChartCauTrucTaiSanController
);

export default chartRouter;
