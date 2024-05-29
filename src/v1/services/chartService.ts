import { db, dbLocal } from "../models";
import { Chart, Result } from "../types";

export const getChartTangTruongDanhThuService = async ({
  StockCode,
  ReportTermType,
  Unit,
  PeriodYear,
}: Chart) => {
  try {
    let result: Result = await db.raw(
      `EXEC ysvn_Chart_GetNetRevenue '${StockCode}',${ReportTermType} ,${Unit}, ${PeriodYear}`
    );
    // let result: Result = await dbLocal.raw(`select * from DIENTHOAI`);

    return (result = {
      statusCode: 200,
      data: result,
      message: "Thành công!",
    });
  } catch (e) {
    console.error(e);
  }
};

export const getChartTangTruongLoiNhuanService = async ({
  StockCode,
  ReportTermType,
  Unit,
  PeriodYear,
}: Chart) => {
  try {
    let result: Result = await db.raw(
      `EXEC ysvn_Chart_GetNetProfitAfterTax '${StockCode}',${ReportTermType} ,${Unit}, ${PeriodYear}`
    );

    return (result = {
      statusCode: 200,
      data: result,
      message: "Thành công!",
    });
  } catch (e) {
    console.error(e);
  }
};

export const getChartBienLoiNhuanService = async ({
  StockCode,
  ReportTermType,
  Unit,
  PeriodYear,
}: Chart) => {
  try {
    let result: Result = await db.raw(
      `EXEC ysvn_Chart_GetProfitMargin '${StockCode}',${ReportTermType} ,${PeriodYear}`
    );

    return (result = {
      statusCode: 200,
      data: result,
      message: "Thành công!",
    });
  } catch (e) {
    console.error(e);
  }
};

export const getChartDinhGiaService = async ({
  StockCode,
  ReportTermType,
  Unit,
  PeriodYear,
}: Chart) => {
  try {
    let result: Result = await db.raw(
      `EXEC ysvn_Chart_DinhGia '${StockCode}',${ReportTermType} ,${PeriodYear}`
    );

    return (result = {
      statusCode: 200,
      data: result,
      message: "Thành công!",
    });
  } catch (e) {
    console.error(e);
  }
};

export const getChartDongTienService = async ({
  StockCode,
  ReportTermType,
  Unit,
  PeriodYear,
}: Chart) => {
  try {
    let result: Result = await db.raw(
      `EXEC ysvn_Chart_CashFlow '${StockCode}',${ReportTermType} ,${Unit}, ${PeriodYear}`
    );

    return (result = {
      statusCode: 200,
      data: result,
      message: "Thành công!",
    });
  } catch (e) {
    console.error(e);
  }
};

export const getChartHieuQuaSuDungVonService = async ({
  StockCode,
  ReportTermType,
  Unit,
  PeriodYear,
}: Chart) => {
  try {
    let result: Result = await db.raw(
      `EXEC ysvn_Chart_SuDungVon '${StockCode}',${ReportTermType} ,${PeriodYear}`
    );

    return (result = {
      statusCode: 200,
      data: result,
      message: "Thành công!",
    });
  } catch (e) {
    console.error(e);
  }
};

export const getChartTaiSanService = async ({
  StockCode,
  ReportTermType,
  Unit,
  PeriodYear,
}: Chart) => {
  try {
    let result: Result = await db.raw(
      `EXEC ysvn_Chart_asset '${StockCode}',${ReportTermType} ,${Unit}`
    );

    return (result = {
      statusCode: 200,
      data: result,
      message: "Thành công!",
    });
  } catch (e) {
    console.error(e);
  }
};

export const getChartNguonVonService = async ({
  StockCode,
  ReportTermType,
  Unit,
  PeriodYear,
}: Chart) => {
  try {
    let result: Result = await db.raw(
      `EXEC ysvn_Chart_nguon_von '${StockCode}',${ReportTermType} ,${Unit}, ${PeriodYear}`
    );

    return (result = {
      statusCode: 200,
      data: result,
      message: "Thành công!",
    });
  } catch (e) {
    console.error(e);
  }
};

export const getChartCauTrucTaiSanService = async ({
  StockCode,
  ReportTermType,
  Unit,
  PeriodYear,
}: Chart) => {
  try {
    let result: Result = await db.raw(
      `EXEC ysvn_Chart_cau_truc_tai_san '${StockCode}',${ReportTermType},${PeriodYear}`
    );

    return (result = {
      statusCode: 200,
      data: result,
      message: "Thành công!",
    });
  } catch (e) {
    console.error(e);
  }
};
