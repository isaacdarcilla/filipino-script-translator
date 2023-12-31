"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Translate text to Buhid.
 *
 * @param text
 * @returns string
 */
function toBuhid(text) {
    const replacements = [
        [/o/g, 'u'],
        [/e/g, 'i'],
        [/nga/g, '\u1745'],
        [/ngi/g, '\u1745\u1752'],
        [/ngu/g, '\u1745\u1753'],
        [/ng/g, ''],
        [/ka/g, '\u1743'],
        [/ga/g, '\u1744'],
        [/ta/g, '\u1746'],
        [/da/g, '\u1747'],
        [/na/g, '\u1748'],
        [/pa/g, '\u1749'],
        [/ba/g, '\u174A'],
        [/ma/g, '\u174B'],
        [/ya/g, '\u174C'],
        [/ra/g, '\u174D'],
        [/la/g, '\u174E'],
        [/wa/g, '\u174F'],
        [/sa/g, '\u1750'],
        [/ha/g, '\u1751'],
        [/ki/g, '\u1743\u1752'],
        [/gi/g, '\u1744\u1752'],
        [/ti/g, '\u1746\u1752'],
        [/di/g, '\u1747\u1752'],
        [/ni/g, '\u1748\u1752'],
        [/pi/g, '\u1749\u1752'],
        [/bi/g, '\u174A\u1752'],
        [/mi/g, '\u174B\u1752'],
        [/yi/g, '\u174C\u1752'],
        [/ri/g, '\u174D\u1752'],
        [/li/g, '\u174E\u1752'],
        [/wi/g, '\u174F\u1752'],
        [/si/g, '\u1750\u1752'],
        [/hi/g, '\u1751\u1752'],
        [/ku/g, '\u1743\u1753'],
        [/gu/g, '\u1744\u1753'],
        [/tu/g, '\u1746\u1753'],
        [/du/g, '\u1747\u1753'],
        [/nu/g, '\u1748\u1753'],
        [/pu/g, '\u1749\u1753'],
        [/bu/g, '\u174A\u1753'],
        [/mu/g, '\u174B\u1753'],
        [/yu/g, '\u174C\u1753'],
        [/ru/g, '\u174D\u1753'],
        [/lu/g, '\u174E\u1753'],
        [/wu/g, '\u174F\u1753'],
        [/su/g, '\u1750\u1753'],
        [/hu/g, '\u1751\u1753'],
        [/a/g, '\u1740'],
        [/i/g, '\u1741'],
        [/u/g, '\u1742'],
    ];
    return replacements.reduce((translatedText, [pattern, replacement]) => translatedText.replace(pattern, replacement), text);
}
exports.default = toBuhid;
