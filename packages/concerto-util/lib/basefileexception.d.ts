import BaseException = require('./baseexception');
/**
 * Exception throws when a Concerto file is semantically invalid
 * @extends BaseException
 * @see {@link BaseException}
 * @class
 * @memberof module:concerto-core
 */
declare class BaseFileException extends BaseException {
    fileLocation: string | null;
    shortMessage: string;
    fileName: string | null;
    /**
     * Create an BaseFileException
     * @param message - the message for the exception
     * @param fileLocation - the optional file location associated with the exception
     * @param fullMessage - the optional full message text
     * @param fileName - the file name
     * @param component - the component which throws this error
     */
    constructor(message: string, fileLocation?: string | null, fullMessage?: string | null, fileName?: string | null, component?: string);
    /**
     * Returns the file location associated with the exception or null
     * @return the optional location associated with the exception
     */
    getFileLocation(): string | null;
    /**
     * Returns the error message without the location of the error
     * @returns the error message
     */
    getShortMessage(): string;
    /**
     * Returns the fileName for the error
     * @returns the file name or null
     */
    getFileName(): string | null;
}
export = BaseFileException;
