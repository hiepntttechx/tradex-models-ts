/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * stopOrderPlaceRequest schema
 */
export type StopOrderPlaceRequest = BaseRequest & {
  /**
   * accountNumber
   */
  accountNumber: string;
  /**
   * subNumber
   */
  subNumber?: null | string;
  /**
   * stockCode
   */
  stockCode: string;
  /**
   * orderQuantity
   */
  orderQuantity: number;
  /**
   * sellBuyType
   */
  sellBuyType: "SELL" | "BUY";
  /**
   * orderType
   */
  orderType: "STOP" | "STOP_LIMIT";
  /**
   * stopPrice
   */
  stopPrice: number;
  /**
   * orderPrice
   */
  orderPrice?: null | number;
  /**
   * bankCode
   */
  bankCode: string;
  /**
   * bankAccount
   */
  bankAccount: string;
  /**
   * securitiesType
   */
  securitiesType: "STOCK" | "FUND" | "BOND" | "ETF" | "FUTURES" | "CW";
  /**
   * fromDate, format (YYYYMMDD)
   */
  fromDate?: null | string;
  /**
   * toDate, format (YYYYMMDD)
   */
  toDate?: null | string;
  [k: string]: any;
};
