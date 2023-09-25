import toBaybayin from './scripts/baybayin';
import toBuhid from './scripts/buhid';
import toHanunoo from './scripts/hanunoo';
import toTagbanwa from './scripts/tagbanwa';
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
export { toBaybayin, toBuhid, toHanunoo, toTagbanwa };
