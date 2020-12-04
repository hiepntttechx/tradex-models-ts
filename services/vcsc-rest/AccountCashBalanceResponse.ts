/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Account cash balance response schema
 */
export interface AccountCashBalanceResponse {
  /**
   * Deposit amount
   */
  depositAmount?: null | number;
  /**
   * Deposit block amount
   */
  depositBlockAmount?: null | number;
  /**
   * Order block amount
   */
  orderBlockAmount?: null | number;
  /**
   * Stock evaluation amount
   */
  stockEvaluationAmount?: null | number;
  /**
   * Withdrawable amount
   */
  withdrawableAmount?: null | number;
  /**
   * Reuse amount
   */
  reuseAmount?: null | number;
  /**
   * Virtual deposit
   */
  virtualDeposit?: null | number;
  /**
   * Used virtual deposit
   */
  usedVirtualDeposit?: null | number;
  /**
   * Margin loan amount
   */
  marginLoanAmount?: null | number;
  /**
   * Secured loan amount
   */
  securedLoanAmount?: null | number;
  /**
   * Expired loan amount
   */
  expiredLoanAmount?: null | number;
  /**
   * Wait sell amount
   */
  waitSellAmount?: null | number;
  [k: string]: any;
}