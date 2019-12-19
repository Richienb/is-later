/**
 * Check if a version is later than another.
 * @param a The first version to compare.
 * @param b The second version to compare.
 * @example
 * ```
 * const isLater = require("is-later");
 *
 * isLater("1.0.0", "2.0.0");
 * //=> false
 *
 * isLater("1.0.0", "1.0.0");
 * //=> false
 *
 * isLater("1.0.0", "0.0.0");
 * //=> true
 * ```
*/
declare function isLater(a: string, b: string): boolean;

export = isLater;
