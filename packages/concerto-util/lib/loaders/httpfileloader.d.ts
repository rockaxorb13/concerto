/**
 * Loads Files from an HTTP(S) URL using fetch.
 * @class
 * @private
 * @memberof module:concerto-util
 */
declare class HTTPFileLoader {
    processFile: (name: string, text: string) => any;
    /**
     * Create the HTTPFileLoader.
     * @param processFile - a function to apply to the content of the file
     */
    constructor(processFile: (name: string, text: string) => any);
    /**
     * Returns true if this ModelLoader can process the URL
     * @param url - the URL
     * @return true if this ModelLoader accepts the URL
     * @abstract
     */
    accepts(url: string): boolean;
    /**
     * Load a text File from a URL and return it
     * @param requestUrl - the url to get
     * @param options - additional options
     * @return a promise to the File
     */
    load(requestUrl: string, options: any): Promise<any>;
}
export = HTTPFileLoader;
