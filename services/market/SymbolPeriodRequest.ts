/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * symbolPeriodRequest schema
 */
export type SymbolPeriodRequest = BaseRequest & {
  /**
   * symbol code
   */
  symbol: string;
  /**
   * period type: DAILY, WEEKLY, MONTHLY, SIX_MONTH
   */
  periodType: null | ("DAILY" | "WEEKLY" | "MONTHLY" | "SIX_MONTH");
  /**
   * base date for query next (YYYYMMDD)
   */
  baseDate?: string | null;
  /**
   * The number of record that user want to see at each page
   */
  fetchCount?: number | null;
  [k: string]: any;
};
