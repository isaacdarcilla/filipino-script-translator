## filipino-script-translator

Translate given text into Baybayin, Buhid, Hanunoo, or Tagbanwa scripts.

### Installation

```bash
npm install filipino-script-translator
```

### Usage

Import the function and the enum fom the package. 
You can change the `script` parameter into one of the enums, the default is `BAYBAYIN`.

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

### Testing

```
npm run test
```

### Linting

```
npm run lint
```

### License

This package is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
