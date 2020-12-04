/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * lastDividendRequest schema
 */
export type LastDividendRequest = BaseRequest & {
  /**
   * symbol code
   */
  code?: string | null;
  /**
   * current dividend event date (yyyyMMdd)
   */
  date?: string | null;
  [k: string]: any;
};