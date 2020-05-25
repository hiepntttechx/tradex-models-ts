/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * diaryListResponse schema
 */
export type DiaryListResponse = {
  /**
   * id of the diary
   */
  id?: number;
  /**
   * title of the diary
   */
  title?: string;
  /**
   * description of the diary
   */
  description?: string;
  /**
   * slug of the diary
   */
  slug?: string;
  /**
   * avatar of the diary
   */
  avatar?: string;
  /**
   * author of the diary
   */
  author?: string;
  /**
   * diary created at, YYYYMMDDhhmmss
   */
  createdAt?: string;
  [k: string]: any;
}[];