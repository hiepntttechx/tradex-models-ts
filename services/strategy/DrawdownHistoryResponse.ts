/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * drawdownHistoryResponse schema
 */
export interface DrawdownHistoryResponse {
  /**
   * t: time - date, like 20190101
   */
  t: number[];
  /**
   * d: draw down of the strategy
   */
  d: number[];
  [k: string]: any;
}