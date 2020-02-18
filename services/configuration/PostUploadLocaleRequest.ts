/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {Language} from "tradex-models-common";

/**
 * request for query list of holiday
 */
export type PostUploadLocaleRequest = BaseRequest & {
  /**
   * name space id
   */
  namespaceId: number;
  lang: Language;
  /**
   * versionning
   */
  version?: string;
  [k: string]: any;
};
