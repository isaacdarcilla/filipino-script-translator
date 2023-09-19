import { Script, translate } from '../src';

const testCases = [
  { script: Script.BAYBAYIN, text: 'a', expected: '\u1700' },
  { script: Script.HANUNOO, text: 'a', expected: '\u1720' },
  { script: Script.BUHID, text: 'nga', expected: '\u1745' },
  { script: Script.TAGBANWA, text: 'nga', expected: '\u1765' },
];

testCases.forEach(({ script, text, expected }) => {
  test(`translate using script '${script}' with text '${text}' should return '${expected}'`, () => {
    const result = translate(text, script);
    expect(result).toMatch(expected);
  });
});
