import { Script, translate } from '../src';

describe('baybayin', () => {
  describe('translate', () => {
    it('should return a string containing the baybayin text', () => {
      const text = 'a';

      const result = translate(text);

      expect(result).toMatch('\u1700');
    });
  });
});

describe('hanunoo', () => {
  describe('translate', () => {
    it('should return a string containing the hanunoo text', () => {
      const text = 'a';

      const result = translate(text, Script.HANUNOO);

      expect(result).toMatch('\u1720');
    });
  });
});

describe('buhid', () => {
  describe('translate', () => {
    it('should return a string containing the buhid text', () => {
      const text = 'nga';

      const result = translate(text, Script.BUHID);

      expect(result).toMatch('\u1745');
    });
  });
});

describe('tagbanwa', () => {
  describe('translate', () => {
    it('should return a string containing the tagbanwa text', () => {
      const text = 'nga';

      const result = translate(text, Script.TAGBANWA);

      expect(result).toMatch('\u1765');
    });
  });
});
