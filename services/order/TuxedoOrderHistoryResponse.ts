/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * tuxedoOrderHistoryResponse schema
 */
export interface TuxedoOrderHistoryResponse {
  /**
   * account Number
   */
  accountNumber?: string;
  /**
   * sub Number
   */
  subNumber?: string;
  /**
   * symbol Code
   */
  stockCode?: string;
  /**
   * order Date
   */
  orderDate?: string;
  orderTime?: string;
  /**
   * sell Buy Type
   */
  sellBuyType?: "BUY" | "SELL";
  /**
   * order Type
   */
  orderType?: "LO" | "MP" | "ATO" | "ATC" | "MOK" | "MAK" | "MTL" | "PLO";
  /**
   * order Quantity
   */
  orderQuantity?: number;
  /**
   * order Price
   */
  orderPrice?: number;
  /**
   * orderAmount
   */
  orderAmount?: number;
  /**
   * matchedAmount
   */
  matchedAmount?: number;
  /**
   * matched Quantity
   */
  matchedQuantity?: number;
  /**
   * matched Price
   */
  matchedPrice?: number;
  /**
   * unmatched Quantity
   */
  unmatchedQuantity?: number;
  /**
   * modify Cancel Type
   */
  modifyCancelType?: "NORMAL" | "PARTIAL_CORRECTION" | "ALL_CORRECTION" | "PARTIAL_CANCEL" | "ALL_CANCEL";
  /**
   * modify Cancel Quantity
   */
  modifyCancelQuantity?: number;
  /**
   * order Status
   */
  orderStatus?: "RECEIPT" | "SEND" | "ORDER_CONFIRM" | "RECEIPT_CONFIRM" | "FULL_FILLED" | "PARTIAL_FILLED" | "REJECT";
  /**
   * order Number
   */
  orderNumber?: string;
  /**
   * original Order Number returned by BOS
   */
  originalOrderNumber?: string;
  /**
   * username
   */
  username?: string;
  /**
   * branch Code
   */
  branchCode?: string;
  /**
   * bank name
   */
  bankName?: string;
  [k: string]: any;
}
