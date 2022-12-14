/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Account transaction history request schema
 */
export type AccountTransactionHistoryRequest = BaseRequest & {
  /**
   * Account number
   */
  accountNumber: string;
  /**
   * Sub number
   */
  subNumber?: null | string;
  /**
   * From date (YYYYmmdd)
   */
  fromDate?: null | string;
  /**
   * To date (YYYYmmdd)
   */
  toDate?: null | string;
  /**
   * Trading type
   */
  tradingType?: null | string;
  /**
   * Last trading date
   */
  lastTradingDate?: null | string;
  /**
   * Last trading sequence
   */
  lastTradingSequence?: null | string;
  [k: string]: any;
};
