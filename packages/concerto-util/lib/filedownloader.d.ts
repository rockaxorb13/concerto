/**
 * Downloads the transitive closure of a set of model files.
 * @memberof module:concerto-core
 */
declare class FileDownloader {
    fileLoader: any;
    getExternalImports: any;
    concurrency: number;
    /**
     * Create a FileDownloader and bind to a FileLoader.
     * @param fileLoader - the loader to use to download model files
     * @param getExternalImports - a function taking a file and returning new files
     * @param concurrency - the number of model files to download concurrently
     */
    constructor(fileLoader: any, getExternalImports: any, concurrency?: number);
    /**
     * Download all external dependencies for an array of model files
     * @param files - the model files
     * @param options - Options object passed to FileLoaders
     * @return a promise that resolves to Files[] for the external model files
     */
    downloadExternalDependencies(files: any[], options: any): Promise<any>;
    /**
     * Execute a Job
     * @param job - the job to execute
     * @param fileLoader - the loader to use to download model files.
     * @return a promise to the job results
     */
    runJob(job: any, fileLoader: any): Promise<any>;
}
export = FileDownloader;
