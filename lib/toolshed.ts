/**
 * Union Type that allows use of any string 
 * while still maintaining and generating all 
 * literals and adding syntax highlighting
 */
export type TLiteralUnion<T extends U, U = string> =
  | T
  | (U & { zz_IGNORE_ME?: never });