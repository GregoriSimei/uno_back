import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
  {
    files: ["**/*.ts", "**/*.js"],
    rules: {
      "no-unused-vars":                    "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "args":                           "all",
          "argsIgnorePattern":              "^_",
          "caughtErrors":                   "all",
          "caughtErrorsIgnorePattern":      "^_",
          "destructuredArrayIgnorePattern": "^_",
          "varsIgnorePattern":              "^_",
          "ignoreRestSiblings":             true
        }
      ],
      "no-empty-function":                    "off",
      "@typescript-eslint/no-empty-function": [
        "error",
        {
          "allow": [
            "private-constructors"
          ]
        }
      ],
      "no-explicit-any":                                   "off",
      "@typescript-eslint/no-explicit-any":                "error",
      "explicit-module-boundary-types":                    "off",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@stylistic/js/no-multi-spaces":                     [
        "error",
        {
          exceptions: {
            "VariableDeclarator": true,
            "ImportDeclaration":  true
          },
        }
      ],
      "@stylistic/js/key-spacing":             ["error", { align: "value" }],
      "@stylistic/js/no-multiple-empty-lines": [
        "error",
        { 
          "max":    1, 
          "maxEOF": 1, 
          "maxBOF": 0 
        }
      ]
    },
    languageOptions: {
      sourceType: "script"
    },
    plugins: {
      "@stylistic/js": stylisticJs
    }
  },
  {
    languageOptions: {
      globals: globals.node
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];