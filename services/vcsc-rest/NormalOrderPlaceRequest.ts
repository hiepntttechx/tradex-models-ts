/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Place normal order request schema
 */
export type NormalOrderPlaceRequest = BaseRequest & {
  /**
   * Code
   */
  code?: null | string;
  /**
   * Heg yn
   */
  hegYn?: null | string;
  /**
   * Reg yn
   */
  regYn?: null | string;
  /**
   * Password
   */
  password?: null | string;
  /**
   * Order type
   */
  orderType?: null | string;
  /**
   * Order price
   */
  orderPrice?: null | number;
  /**
   * Sell buy type
   */
  sellBuyType?: null | string;
  /**
   * Account number
   */
  accountNumber?: null | string;
  /**
   * Order quantity
   */
  orderQuantity?: null | number;
  /**
   * Order condition
   */
  orderCondition?: null | string;
  /**
   * Stop order price
   */
  stopOrderPrice?: null | string;
  /**
   * Min match quantity
   */
  minMatchQuantity?: null | string;
  [k: string]: any;
};
