/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Account profit loss cummulative response schema
 */
export interface AccountProfitLossCummulativeResponse {
  /**
   * fee
   */
  fee?: null | number;
  /**
   * tax
   */
  tax?: null | number;
  /**
   * realized PL
   */
  realizedPL?: null | number;
  /**
   * unrealized PL
   */
  unrealizedPL?: null | number;
  /**
   * net Profit Loss
   */
  netProfitLoss?: null | number;
  /**
   * profit Loss Items
   */
  profitLossItems?: {
    /**
     * fee
     */
    fee?: null | number;
    /**
     * tax
     */
    tax?: null | number;
    /**
     * code
     */
    code?: null | string;
    /**
     * date
     */
    date?: null | string;
    /**
     * next Key
     */
    nextKey?: null | number;
    /**
     * realized PL
     */
    realizedPL?: null | number;
    /**
     * unrealized PL
     */
    unrealizedPL?: null | number;
    /**
     * net Profit Loss
     */
    netProfitLoss?: null | number;
    [k: string]: any;
  }[];
  [k: string]: any;
}