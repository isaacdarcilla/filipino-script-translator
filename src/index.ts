import toBaybayin from './scripts/baybayin';
import toBuhid from './scripts/buhid';
import toHanunoo from './scripts/hanunoo';
import toTagbanwa from './scripts/tagbanwa';

export enum Script {
  BAYBAYIN = 'baybayin',
  HANUNOO = 'hanunoo',
  BUHID = 'buhid',
  TAGBANWA = 'tagbanwa',
}

type ScriptFunction = (text: string) => string;

const scriptConverters: Record<Script, ScriptFunction> = {
  [Script.BAYBAYIN]: toBaybayin,
  [Script.HANUNOO]: toHanunoo,
  [Script.BUHID]: toBuhid,
  [Script.TAGBANWA]: toTagbanwa,
};

/**
 * Translate a given text into a desired script.
 *
 * @param text string
 * @param script Script
 * @returns string
 */
export const translate = (
  text: string,
  script: Script = Script.BAYBAYIN
): string => {
  const scriptConverter = scriptConverters[script] || toBaybayin;
  return scriptConverter(text);
};

export { toBaybayin, toBuhid, toHanunoo, toTagbanwa };
