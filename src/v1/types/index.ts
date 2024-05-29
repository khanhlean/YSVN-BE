export interface GetFinanceInformation {
  StockCode: string;
  ReportTermType: number;
  Unit: number;
  PageIndex: number;
  PageSize: number;
  ReportType: string;
}

export interface GetCrrReportTerm {
  iStockCode: string;
  ReportTermTypeID: number | string;
  PageIndex: number | string;
  PageSize: number | string;
  Ordering: string;
}

export interface DataLogin {
  email: string;
  pass_word: string;
}

export interface User {
  user_name: string;
  pass_word: string | number;
  email: string;
  phone_number: number;
  role_code: number;
}

export interface DataRegister {
  user_name: string;
  pass_word: string | number;
  email: string;
  phone_number: number;
}

export interface Result {
  statusCode?: number;
  message?: string;
  data?: any;
}

export interface Chart {
  StockCode: string;
  ReportTermType: number;
  Unit: number;
  PeriodYear: number;
}
