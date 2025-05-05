# `@abraxas/ts-and-lint-config`

Collection of internal eslint configurations.


## Usage

Add to your package.json:

```json
{
  "@abraxas/eslint-config": "git@github.com:abraxaslabs-io/abx-eslint.git#v1.0.4",
}
```

### ESLINT

```ts
import { defineConfig, globalIgnores } from "eslint/config";
import abxRules from "@abraxas/eslint-config/library.js";

export default defineConfig([
  globalIgnores(['**/dist/', 'node_modules/']),
  ...abxRules,
]);
```