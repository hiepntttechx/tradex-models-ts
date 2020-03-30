/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Transfer im history request schema
 */
export type DrImHistoryRequest = BaseRequest & {
  /**
   * Account number
   */
  accountNumber: string;
  /**
   * Type
   */
  type: string;
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
  lastSequenceNumber?: null | string;
  /**
   * Fetch count
   */
  fetchCount?: null | number;
  [k: string]: any;
};
