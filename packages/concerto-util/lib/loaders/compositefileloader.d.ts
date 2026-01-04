/**
 * <p>
 * Manages a set of model file loaders, delegating to the first model file
 * loader that accepts a URL.
 * </p>
 * @private
 * @class
 * @memberof module:concerto-util
 */
declare class CompositeFileLoader {
    fileLoaders: any[];
    /**
     * Create the CompositeFileLoader. Used to delegate to a set of FileLoaders.
     */
    constructor();
    /**
     * Adds a FileLoader implemenetation to the FileLoader
     * @param fileLoader - The script to add to the ScriptManager
     */
    addFileLoader(fileLoader: any): void;
    /**
     * Get the array of FileLoader instances
     * @return The FileLoader registered
     * @private
     */
    getFileLoaders(): any[];
    /**
     * Remove all registered FileLoaders
     */
    clearFileLoaders(): void;
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
export = CompositeFileLoader;
