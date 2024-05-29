import express, { Request, Response } from "express";
import { GetCrrReportTerm, GetFinanceInformation } from "../types";
import {
  getAllStockService,
  getCrrReportTermService,
  getFinanceInformationService,
  getStockByIdService,
} from "../services/stock.service";

export const getCrrReportTerm = async (req: any, res: Response) => {
  const {
    iStockCode,
    ReportTermTypeID,
    PageIndex,
    PageSize,
    Ordering,
  }: GetCrrReportTerm = req.body;

  // service
  const result = await getCrrReportTermService({
    iStockCode,
    ReportTermTypeID,
    PageIndex,
    PageSize,
    Ordering,
  });
  return res.status(200).json(result);
};

export const getFinanceInformation = async (req: any, res: Response) => {
  const {
    StockCode,
    ReportTermType,
    Unit,
    PageIndex,
    PageSize,
    ReportType,
  }: GetFinanceInformation = req.body;

  // service
  const result = await getFinanceInformationService({
    StockCode,
    ReportTermType,
    Unit,
    PageIndex,
    PageSize,
    ReportType,
  });
  return res.status(200).json(result);
};

export const getAllStock = async (req: any, res: Response) => {
  // service
  const result = await getAllStockService();
  return res.status(200).json(result);
};

export const getStockById = async (req: Request, res: Response) => {
  // service
  const { StockID } = req.params
  const result = await getStockByIdService(StockID);
  return res.status(200).json(result);
};