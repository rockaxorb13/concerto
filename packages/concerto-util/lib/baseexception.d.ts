/**
* A base class for all Concerto exceptions
* @extends Error
* @class
* @memberof module:concerto-core
*/
declare class BaseException extends Error {
    component: string;
    errorType: string;
    /**
     * Create the BaseException.
     * @param message - The exception message.
     * @param component - The optional component which throws this error.
     * @param errorType - The optional error code regarding the error
     */
    constructor(message: string, component?: string, errorType?: string);
}
export = BaseException;
