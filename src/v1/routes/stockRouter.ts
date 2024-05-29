import express from "express";
import { getAllStock, getCrrReportTerm, getFinanceInformation, getStockById } from "../controllers/stock.controller";

const stockRouter = express.Router()

stockRouter.post('/get-finance', getFinanceInformation)
stockRouter.post('/get-crr', getCrrReportTerm)
stockRouter.get('/get-stock', getAllStock)
stockRouter.get('/get-stock/:StockID', getStockById)
// stockRouter.get('/:StockID', getStockController)

export default stockRouter