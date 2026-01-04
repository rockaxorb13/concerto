import HTTPFileLoader = require('./httpfileloader');
/**
 * Loads Files from an external source, such as a URL.
 *
 * @class
 * @private
 * @memberof module:concerto-util
 */
declare class GitHubFileLoader extends HTTPFileLoader {
    /**
     * Create the GitHubFileLoader.
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
     * Load a File from a URL and return it
     * @param url - the url to get
     * @param options - additional options
     * @return a promise to the File
     */
    load(url: string, options: any): Promise<any>;
}
export = GitHubFileLoader;
