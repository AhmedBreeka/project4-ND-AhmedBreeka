import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
        rules: {
            "no-var": "error",
            "no-unused-vars": "error", // Errors for unused variables
            semi: ["error", "always"], // Errors for missing semicolons
            "no-console": "warn",
            eqeqeq: "error", // Enforce strict equality
            curly: "error", // Enforce consistent brace style for all control statements
            "valid-typeof": "error", // This rule enforces comparing typeof expressions to valid string literals.
        },
    },
]);
