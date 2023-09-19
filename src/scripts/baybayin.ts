export default function toBaybayin(text: string): string {
  const replacements: [RegExp, string][] = [
    [/e/g, 'i'],
    [/o/g, 'u'],
    [/nang/g, '\u1708\u1705\u1714'],
    [/ning|neng/g, '\u1708\u1712\u1705\u1714'],
    [/nong|nung/g, '\u1708\u1713\u1705\u1714'],
    [/nga/g, '\u1705'],
    [/ngi/g, '\u1705\u1712'],
    [/ngu/g, '\u1705\u1713'],
    [/ng/g, '\u1705\u1714'],
    [/ka/g, '\u1703'],
    [/ga/g, '\u1704'],
    [/ta/g, '\u1706'],
    [/da/g, '\u1707'],
    [/na/g, '\u1708'],
    [/pa/g, '\u1709'],
    [/ba/g, '\u170A'],
    [/ma/g, '\u170B'],
    [/ya/g, '\u170C'],
    [/ra/g, '\u1707'],
    [/la/g, '\u170E'],
    [/wa/g, '\u170F'],
    [/sa/g, '\u1710'],
    [/ha/g, '\u1711'],
    [/ki/g, '\u1703\u1712'],
    [/gi/g, '\u1704\u1712'],
    [/ti/g, '\u1706\u1712'],
    [/di/g, '\u1707\u1712'],
    [/ni/g, '\u1708\u1712'],
    [/pi/g, '\u1709\u1712'],
    [/bi/g, '\u170A\u1712'],
    [/mi/g, '\u170B\u1712'],
    [/yi/g, '\u170C\u1712'],
    [/ri/g, '\u1707\u1712'],
    [/li/g, '\u170E\u1712'],
    [/wi/g, '\u170F\u1712'],
    [/si/g, '\u1710\u1712'],
    [/hi/g, '\u1711\u1712'],
    [/ku/g, '\u1703\u1713'],
    [/gu/g, '\u1704\u1713'],
    [/tu/g, '\u1706\u1713'],
    [/du/g, '\u1707\u1713'],
    [/nu/g, '\u1708\u1713'],
    [/pu/g, '\u1709\u1713'],
    [/bu/g, '\u170A\u1713'],
    [/mu/g, '\u170B\u1713'],
    [/yu/g, '\u170C\u1713'],
    [/ru/g, '\u1707\u1713'],
    [/lu/g, '\u170E\u1713'],
    [/wu/g, '\u170F\u1713'],
    [/su/g, '\u1710\u1713'],
    [/hu/g, '\u1711\u1713'],
    [/a/g, '\u1700'],
    [/i/g, '\u1701'],
    [/u/g, '\u1702'],
    [/k/g, '\u1703\u1714'],
    [/g/g, '\u1704\u1714'],
    [/t/g, '\u1706\u1714'],
    [/d/g, '\u1707\u1714'],
    [/n/g, '\u1708\u1714'],
    [/p/g, '\u1709\u1714'],
    [/b/g, '\u170A\u1714'],
    [/m/g, '\u170B\u1714'],
    [/y/g, '\u170C\u1714'],
    [/r/g, '\u1707\u1714'],
    [/l/g, '\u170E\u1714'],
    [/w/g, '\u170F\u1714'],
    [/s/g, '\u1710\u1714'],
    [/h/g, '\u1711\u1714'],
  ];

  return replacements.reduce(
    (translatedText, [pattern, replacement]) =>
      translatedText.replace(pattern, replacement),
    text
  );
}