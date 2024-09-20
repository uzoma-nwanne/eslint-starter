import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
    rules: {
      semi: "error",
      "prefer-const": "error",
      indent:["error", 4],
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
