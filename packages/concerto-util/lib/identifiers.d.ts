export declare const ID_REGEX: RegExp;
/**
 * Function that attempts to normalize arbitrary strings
 * into valid Concerto identifiers
 *
 * @param identifier - the input value
 * @param truncateLength - Length at which to truncate the identifier
 * @returns - An identifier that meets the Concerto specification
 */
export declare function normalizeIdentifier(identifier: any, truncateLength?: number): string;
