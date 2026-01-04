import Writer = require('./writer');
/**
 * FileWriter buffers text to be written to a file.
 * @private
 * @class
 * @memberof module:concerto-util
 */
declare class FileWriter extends Writer {
    outputDirectory: string;
    fileName: string | null;
    relativeDir: string | null;
    /**
     * Create a FileWriter.
     * @param outputDirectory - the output directory
     */
    constructor(outputDirectory: string);
    /**
     * Open a file for writing. The file is created in the
     * output directory.
     * @param fileName - the name of the file to open
     */
    openFile(fileName: string): void;
    /**
     * Open a file for writing. The file is created in the
     * output directory, plus the relative directory path.
     * @param relativeDir - the relative directory
     * @param fileName - the name of the file to open
     */
    openRelativeFile(relativeDir: string, fileName: string): void;
    /**
     * Writes text to the current open file
     * @param tabs - the number of tabs to use
     * @param text - the text to write
     */
    writeLine(tabs: number, text: string): void;
    /**
     * Writes text to the start of the current open file
     * @param tabs - the number of tabs to use
     * @param text - the text to write
     */
    writeBeforeLine(tabs: number, text: string): void;
    /**
     * Closes the file, flushing the buffer to disk.
     */
    closeFile(): void;
}
export = FileWriter;
