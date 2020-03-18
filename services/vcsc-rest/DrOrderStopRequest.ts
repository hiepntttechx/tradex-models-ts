/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Dr order stop request schema
 */
export type DrOrderStopRequest = BaseRequest & {
  /**
   * Code
   */
  code?: null | string;
  /**
   * Date
   */
  date?: null | string;
  /**
   * To date (YYYYmmdd)
   */
  toDate?: null | string;
  /**
   * From date (YYYYmmdd)
   */
  fromDate?: null | string;
  /**
   * Password
   */
  password?: null | string;
  /**
   * Band price
   */
  bandPrice?: null | number;
  /**
   * Order type
   */
  orderType?: null | string;
  /**
   * Stop price
   */
  stopPrice?: null | number;
  /**
   * Order price
   */
  orderPrice?: null | number;
  /**
   * Sell buy type, [BUY, SELL, ALL]
   */
  sellBuyType?: null | ("BUY" | "SELL" | "ALL");
  /**
   * Account number
   */
  accountNumber?: null | string;
  /**
   * Order quantity
   */
  orderQuantity?: null | number;
  /**
   * Order validity
   */
  orderValidity?: null | string;
  [k: string]: any;
};
