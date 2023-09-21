export declare enum Script {
    BAYBAYIN = "baybayin",
    HANUNOO = "hanunoo",
    BUHID = "buhid",
    TAGBANWA = "tagbanwa"
}
/**
 * Translate a given text into a desired script.
 *
 * @param text string
 * @param script Script
 * @returns string
 */
export declare const translate: (text: string, script?: Script) => string;
