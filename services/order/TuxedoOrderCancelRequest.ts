/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * tuxedoOrderCancelRequest schema
 */
export type TuxedoOrderCancelRequest = BaseRequest & {
  /**
   * account number
   */
  accountNumber: string;
  /**
   * sub number
   */
  subNumber: string;
  /**
   * order number
   */
  orderNumber?: string;
  /**
   * branchCode
   */
  branchCode?: string;
  [k: string]: any;
};
