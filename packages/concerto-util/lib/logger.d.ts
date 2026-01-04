/**
 * A utility class with static function that print to the console
 */
declare class Logger {
    static level: string;
    static transports: any[];
    /**
    * A reusable function for logging at multiple levels
    * @param level - the required log level. e.g. error, warn, info, debug, etc.
    * @param args - the input obj to prettify
    */
    static dispatch(level: string, ...args: any[]): void;
    /**
    * Add a custom transport for logging
    * @param transport - The transport object should have function for the usual logging operations e.g. error, warn, info, debug, etc.
    */
    static add(transport: any): void;
    /**
     * Write an error statement to the console.
     *
     * Prints to `stderr` with newline.
     * @param args - args
     */
    static error(...args: any[]): void;
    /**
     * Write a warning statement to the console.
     *
     * Prints to `stderr` with newline.
     * @param args - args
     */
    static warn(...args: any[]): void;
    /**
     * Write an info statement to the console.
     *
     * Prints to `stdout` with newline.
     * @param args - args
     */
    static info(...args: any[]): void;
    /**
     * Write an info statement to the console. Alias for `logger.log`
     *
     * Prints to `stdout` with newline.
     * @param args - args
     */
    static log(...args: any[]): void;
    /**
     * Write an http statement to the console.
     *
     * Prints to `stdout` with newline.
     * @param args - args
     */
    static http(...args: any[]): void;
    /**
     * Write a verbose log statement to the console.
     *
     * Prints to `stdout` with newline.
     * @param args - args
     */
    static verbose(...args: any[]): void;
    /**
     * Write a debug statement to the console.
     *
     * Prints to `stdout` with newline.
     * @param args - args
     */
    static debug(...args: any[]): void;
    /**
     * Write a silly level statement to the console.
     *
     * Prints to `stdout` with newline.
     * @param args - args
     */
    static silly(...args: any[]): void;
}
export = Logger;
