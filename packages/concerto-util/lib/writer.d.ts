/**
 * Writer buffers text to be written in memory. It handles simple
 * indentation and tracks the number of lines written.
 * @private
 * @class
 * @memberof module:concerto-util
 */
declare class Writer {
    beforeBuffer: string;
    buffer: string;
    linesWritten: number;
    /**
     * Create a Writer.
     */
    constructor();
    /**
     * Writes text to the start of the buffer
     * @param tabs - the number of tabs to use
     * @param text - the text to write
     */
    writeBeforeLine(tabs: number, text: string): void;
    /**
     * Append text to the buffer
     * @param tabs - the number of tabs to use
     * @param text - the text to write
     */
    writeLine(tabs: number, text: string): void;
    /**
     * Returns the number of lines that have been written to the buffer.
     * @return the number of lines written to the buffer.
     */
    getLineCount(): number;
    /**
     * Append text to the buffer, prepending tabs
     * @param tabs - the number of tabs to use
     * @param text - the text to write
     */
    writeIndented(tabs: number, text: string): void;
    /**
     * Append text to the buffer (no automatic newline). The
     * text may contain newline, and these will increment the linesWritten
     * counter.
     * @param msg - the text to write
     */
    write(msg: string): void;
    /**
     * Returns the text that has been buffered in this Writer.
     * @return the buffered text.
     */
    getBuffer(): string;
    /**
     * Empties the underyling buffer and resets the line count.
     */
    clearBuffer(): void;
}
export = Writer;
