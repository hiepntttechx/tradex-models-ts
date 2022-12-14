/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * basketOrderHistoryQueryRequest schema
 */
export type BasketOrderHistoryQueryRequest = BaseRequest & {
  /**
   * sell Buy Type
   */
  sellBuyType?: null | ("SELL" | "BUY");
  /**
   * basket order Status
   */
  status?: null | ("PENDING" | "COMPLETED" | "CANCELLED");
  /**
   * from Date (yyyyMMdd)
   */
  fromDate?: string | null;
  /**
   * to Date (yyyyMMdd)
   */
  toDate?: string | null;
  /**
   * basket order name
   */
  name?: string | null;
  /**
   * next key, to query next (query these basketOrders has id < lastBasketOrderId)
   */
  lastBasketOrderId?: number | null;
  /**
   * The number of record that user want to see at each page
   */
  fetchCount?: number | null;
  [k: string]: any;
};
