/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * trading history response
 */
export interface TradingHistoryResponse {
  /**
   * id of trading history
   */
  tradingHistoryId?: number;
  /**
   * code
   */
  code?: string;
  /**
   * sell buy type
   */
  openType?: "SELL" | "BUY";
  /**
   * time open position (YYYYMMDDhhmmss)
   */
  openDateTime?: string;
  /**
   * time close position (YYYYMMDDhhmmss)
   */
  closeDateTime?: string;
  /**
   * profit
   */
  profit?: number;
  /**
   * total profit
   */
  totalProfit?: number;
  /**
   * open price of position
   */
  open?: number;
  /**
   * close price of position
   */
  close?: number;
  [k: string]: any;
}
