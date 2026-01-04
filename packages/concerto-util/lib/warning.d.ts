/**
 * Emits DeprecationWaring to stderr only once and can be caught using an warning event listener as well, please define the code
 * and document the deprecation code on https://concerto.accordproject.org/deprecation
 * @param message - message of the deprecation warning
 * @param type - type of the deprecation warning
 * @param code - code of the deprecation warning
 * @param detail - detail of the deprecation warning
 */
export declare function printDeprecationWarning(message: string, type: string, code: string, detail: string): void;
