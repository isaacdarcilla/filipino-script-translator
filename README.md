## filipino-script-translator

Translate given text into Baybayin, Buhid, Hanunoo, or Tagbanwa scripts.

### Installation

```bash
npm install filipino-script-translator
```

### Usage

Import the `translate()` and the `enum` from the package.
Change the `script` parameter into one of the enums, the default is `BAYBAYIN`:

```ts
import { Script, translate } from 'filipino-script-translator';

const result = translate('maganda', Script.BAYBAYIN);
// Output: ᜋᜄᜈ᜔ᜇ

const result = translate('maganda', Script.TAGBANWA);
// Output: ᝫᝤᝧ

const result = translate('maganda', Script.HANUNOO);
// Output: ᜫᜤᜨ᜴ᜧ

const result = translate('maganda', Script.BUHID);
// Output: ᝋᝄnᝇ
```

or directly use the translator methods base on the script you want:

```js
import { toBaybayin, toBuhid, toHanunoo, toTagbanwa } from 'filipino-script-translator';

const result = toBaybayin('maganda');
// Output: ᜋᜄᜈ᜔ᜇ

const result = toTagbanwa('maganda');
// Output: ᝫᝤᝧ

const result = toHanunoo('maganda');
// Output: ᜫᜤᜨ᜴ᜧ

const result = toBuhid('maganda');
// Output: ᝋᝄnᝇ
```

### Testing

```
npm run test
```

### Linting

```
npm run lint
```

### Building

```
npm run build
```

### License

This package is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
