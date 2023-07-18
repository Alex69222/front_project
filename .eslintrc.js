module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ['./tsconfig.json'],
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "i18next"
    ],
    "rules": {
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        // "indent": [2, 4],
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".tsx"] }],
        "import/no-unresolved": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "no-unused-vars": "warn",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "i18next/no-literal-string": ["error", {markupOnly: true}]
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}
