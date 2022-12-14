/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Withdraw history request schema
 */
export type WithdrawHistoryRequest = BaseRequest & {
  /**
   * Status
   */
  status: "PENDING" | "CANCELLED" | "APPROVED";
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
   * Last transaction date
   */
  lastTransactionDate?: null | string;
  /**
   * Last sequence number
   */
  lastSequenceNumber?: null | number;
  /**
   * Fetch count
   */
  fetchCount?: null | number;
  [k: string]: any;
};
