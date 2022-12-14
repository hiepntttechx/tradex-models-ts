/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Loan available request schema
 */
export type LoanAvailableRequest = BaseRequest & {
  /**
   * Account number
   */
  accountNumber: string;
  /**
   * Sub number
   */
  subNumber?: null | string;
  /**
   * Loan bank code
   */
  loanBankCode: string;
  /**
   * Last settle bank code
   */
  lastSettleBankCode?: null | number;
  /**
   * Last match date
   */
  lastMatchDate?: null | string;
  /**
   * Last settle date
   */
  lastSettleDate?: null | string;
  /**
   * Last loan order type
   */
  lastLoanOrderType?: null | string;
  /**
   * Fetch count
   */
  fetchCount?: null | number;
  [k: string]: any;
};
