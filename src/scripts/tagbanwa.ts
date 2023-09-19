export default function toTagbanwa(text: string): string {
  const replacements: [RegExp, string][] = [
    [/o/g, 'u'],
    [/e/g, 'i'],
    [/nga/g, '\u1765'],
    [/ngi/g, '\u1765\u1772'],
    [/ngu/g, '\u1765\u1773'],
    [/ng/g, ''],
    [/ka/g, '\u1763'],
    [/ga/g, '\u1764'],
    [/ta/g, '\u1766'],
    [/da/g, '\u1767'],
    [/na/g, '\u1768'],
    [/pa/g, '\u1769'],
    [/ba/g, '\u176A'],
    [/ma/g, '\u176B'],
    [/ya/g, '\u176C'],
    [/ra/g, ''],
    [/la/g, '\u176E'],
    [/wa/g, '\u176F'],
    [/sa/g, '\u1770'],
    [/ha/g, ''],
    [/ki/g, '\u1763\u1772'],
    [/gi/g, '\u1764\u1772'],
    [/ti/g, '\u1766\u1772'],
    [/di/g, '\u1767\u1772'],
    [/ni/g, '\u1768\u1772'],
    [/pi/g, '\u1769\u1772'],
    [/bi/g, '\u176A\u1772'],
    [/mi/g, '\u176B\u1772'],
    [/yi/g, '\u176C\u1772'],
    [/ri/g, ''],
    [/li/g, '\u176E\u1772'],
    [/wi/g, '\u176F\u1772'],
    [/si/g, '\u1770\u1772'],
    [/hi/g, ''],
    [/ku/g, '\u1763\u1773'],
    [/gu/g, '\u1764\u1773'],
    [/tu/g, '\u1766\u1773'],
    [/du/g, '\u1767\u1773'],
    [/nu/g, '\u1768\u1773'],
    [/pu/g, '\u1769\u1773'],
    [/bu/g, '\u176A\u1773'],
    [/mu/g, '\u176B\u1773'],
    [/yu/g, '\u176C\u1773'],
    [/ru/g, ''],
    [/lu/g, '\u176E\u1773'],
    [/wu/g, '\u176F\u1773'],
    [/su/g, '\u1770\u1773'],
    [/hu/g, ''],
    [/k/g, ''],
    [/g/g, ''],
    [/t/g, ''],
    [/d/g, ''],
    [/n/g, ''],
    [/p/g, ''],
    [/b/g, ''],
    [/m/g, ''],
    [/y/g, ''],
    [/r/g, ''],
    [/l/g, ''],
    [/w/g, ''],
    [/s/g, ''],
    [/h/g, ''],
    [/a/g, '\u1760'],
    [/i/g, '\u1761'],
    [/u/g, '\u1762'],
  ];

  return replacements.reduce(
    (translatedText, [pattern, replacement]) =>
      translatedText.replace(pattern, replacement),
    text
  );
}
