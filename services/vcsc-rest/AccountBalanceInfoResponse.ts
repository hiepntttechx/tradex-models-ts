/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * accountBalanceInfoResponse schema
 */
export interface AccountBalanceInfoResponse {
  /**
   * net Asset Value
   */
  netAssetValue?: number;
  /**
   * current Cash
   */
  currentCash?: number;
  /**
   * blocked Cash
   */
  blockedCash?: number;
  /**
   * unsettled Cash
   */
  unsettledCash?: number;
  /**
   * unpaid Dividend
   */
  unpaidDividend?: number;
  /**
   * total Asset
   */
  totalAsset?: number;
  /**
   * current Holding Value
   */
  currentHoldingValue?: number;
  /**
   * value Of Unpaid Rights
   */
  valueOfUnpaidRights?: number;
  /**
   * invested Capital
   */
  investedCapital?: number;
  /**
   * unrealised PL
   */
  unrealisedPL?: number;
  /**
   * unrealised PL Rate
   */
  unrealisedPLRate?: number;
  /**
   * depository Fee
   */
  depositoryFee?: number;
  /**
   * margin Loan
   */
  marginLoan?: number;
  /**
   * mortgaged Loan
   */
  mortgagedLoan?: number;
  /**
   * loan Interest
   */
  loanInterest?: number;
  /**
   * unsettled Buying Amount
   */
  unsettledBuyingAmount?: number;
  /**
   * total Debt
   */
  totalDebt?: number;
  [k: string]: any;
}
