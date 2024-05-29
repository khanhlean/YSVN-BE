import express, { Request, Response } from "express";
import * as chartService from "../services/chartService";
import { Chart } from "../types";

export const getChartTangTruongDanhThuController = async (
  req: any,
  res: Response
) => {
  const { StockCode, ReportTermType, Unit, PeriodYear }: Chart = req.body;

  const result = await chartService.getChartTangTruongDanhThuService({
    StockCode,
    ReportTermType,
    Unit,
    PeriodYear,
  });
  return res.status(200).json(result);
};

export const getChartTangTruongLoiNhuanController = async (
  req: any,
  res: Response
) => {
  const { StockCode, ReportTermType, Unit, PeriodYear }: Chart = req.body;

  const result = await chartService.getChartTangTruongLoiNhuanService({
    StockCode,
    ReportTermType,
    Unit,
    PeriodYear,
  });
  return res.status(200).json(result);
};

export const getChartBienLoiNhuanController = async (
  req: any,
  res: Response
) => {
  const { StockCode, ReportTermType, Unit, PeriodYear }: Chart = req.body;

  const result = await chartService.getChartBienLoiNhuanService({
    StockCode,
    ReportTermType,
    Unit,
    PeriodYear,
  });
  return res.status(200).json(result);
};

export const getChartDinhGiaController = async (req: any, res: Response) => {
  const { StockCode, ReportTermType, Unit, PeriodYear }: Chart = req.body;

  const result = await chartService.getChartDinhGiaService({
    StockCode,
    ReportTermType,
    Unit,
    PeriodYear,
  });
  return res.status(200).json(result);
};

export const getChartDongTienController = async (req: any, res: Response) => {
  const { StockCode, ReportTermType, Unit, PeriodYear }: Chart = req.body;

  const result = await chartService.getChartDongTienService({
    StockCode,
    ReportTermType,
    Unit,
    PeriodYear,
  });
  return res.status(200).json(result);
};

export const getChartHieuQuaSuDungVonController = async (
  req: any,
  res: Response
) => {
  const { StockCode, ReportTermType, Unit, PeriodYear }: Chart = req.body;

  const result = await chartService.getChartHieuQuaSuDungVonService({
    StockCode,
    ReportTermType,
    Unit,
    PeriodYear,
  });
  return res.status(200).json(result);
};

export const getChartTaiSanController = async (req: any, res: Response) => {
  const { StockCode, ReportTermType, Unit, PeriodYear }: Chart = req.body;

  const result = await chartService.getChartTaiSanService({
    StockCode,
    ReportTermType,
    Unit,
    PeriodYear,
  });
  return res.status(200).json(result);
};

export const getChartNguonVonController = async (req: any, res: Response) => {
  const { StockCode, ReportTermType, Unit, PeriodYear }: Chart = req.body;

  const result = await chartService.getChartNguonVonService({
    StockCode,
    ReportTermType,
    Unit,
    PeriodYear,
  });
  return res.status(200).json(result);
};

export const getChartCauTrucTaiSanController = async (
  req: any,
  res: Response
) => {
  const { StockCode, ReportTermType, Unit, PeriodYear }: Chart = req.body;

  const result = await chartService.getChartCauTrucTaiSanService({
    StockCode,
    ReportTermType,
    Unit,
    PeriodYear,
  });
  return res.status(200).json(result);
};
