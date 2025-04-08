# `@abraxas/eslint-config`

Collection of internal eslint configurations.


## Usage

```ts
import { defineConfig } from "eslint/config";
import abxRules from "@abraxas/eslint-config/library.js";

export default defineConfig([
  ...abxRules,
]);
```