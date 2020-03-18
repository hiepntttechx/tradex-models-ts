/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Place advance order request schema
 */
export type AdvanceOrderPlaceRequest = BaseRequest & {
  /**
   * Bank code
   */
  bankCode?: null | string;
  /**
   * Order type
   */
  orderType?: null | string;
  /**
   * Stock code
   */
  stockCode?: null | string;
  /**
   * Sub number
   */
  subNumber?: null | string;
  /**
   * Order price
   */
  orderPrice?: null | number;
  /**
   * Bank account
   */
  bankAccount?: null | string;
  /**
   * Phone number
   */
  phoneNumber?: null | string;
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
   * Securities type
   */
  securitiesType?: null | string;
  /**
   * Advance order date
   */
  advanceOrderDate?: null | string;
  [k: string]: any;
};
