/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * symbolQuoteResponse schema
 */
export interface SymbolQuoteResponse {
  /**
   * time (yyyyMMddhhmmss)
   */
  t?: string;
  /**
   * open price
   */
  o?: number;
  /**
   * high price
   */
  h?: number;
  /**
   * low price
   */
  l?: number;
  /**
   * close price
   */
  c?: number;
  /**
   * change
   */
  ch?: number;
  /**
   * rate
   */
  ra?: number;
  /**
   * trading volume
   */
  vo?: number;
  /**
   * trading value
   */
  va?: number;
  /**
   * matching volume
   */
  mv?: number;
  /**
   * sequence
   */
  se?: number;
  /**
   * matched by
   */
  mb?: string;
  /**
   * ceiling floor equal
   */
  cf?: string;
  [k: string]: any;
}