import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    rules: {
      // `eslint-config-next@16` enables the React Compiler rules from
      // eslint-plugin-react-hooks@7 and sets this one to "error". It flags
      // pre-existing effects in the context providers (theme, language,
      // projects) that were valid under eslint-config-next@14. Kept as a
      // warning here so the Next 16 upgrade does not have to rewrite them.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
];

export default eslintConfig;
