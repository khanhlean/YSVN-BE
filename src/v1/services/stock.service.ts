import { db } from "../models";
import { GetCrrReportTerm, GetFinanceInformation, Result } from "../types";

export const getFinanceInformationService = async ({
  StockCode,
  ReportTermType,
  Unit,
  PageIndex,
  PageSize,
  ReportType,
}: GetFinanceInformation) => {
  try {
    let result: Result = await db.raw(
      `EXEC ysvn_GetFinanceInformation '${StockCode}',${ReportTermType}, ${Unit}, ${PageIndex}, ${PageSize}, '${ReportType}' `
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

export const getCrrReportTermService = async ({
  iStockCode,
  ReportTermTypeID,
  PageIndex,
  PageSize,
  Ordering,
}: GetCrrReportTerm) => {
  try {
    let result = await db.raw(
      `EXEC ysvn_GetCrrReportTerm '${iStockCode}',${ReportTermTypeID}, ${PageIndex}, ${PageSize}, '${Ordering}' `
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

export const getAllStockService = async () => {
  try {
    let result: Result = {}
    const data = await db("Stock").select("*");
    return result = {
      statusCode: 200,
      data,
      message: 'Thành công!'
    };
  } catch (error) {
    console.log(error);
  }
};

export const getStockByIdService = async (StockID: number | string) => {
  try {
    let result: Result = {}
    const data = await db("Stock").select("*").where({ StockID }).first()
    return result = {
      statusCode: 200,
      data,
      message: 'Thành công!'
    };
  } catch (error) {
    console.log(error);
  }
};