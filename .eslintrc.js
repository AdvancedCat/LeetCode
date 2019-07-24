/**
 * 规则详情： https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md
 */
module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            // jsx: true, // Allows for the parsing of JSX
        },
    },
    rules: {
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'no-public', // 默认可以不写public
            },
        ],
        '@typescript-eslint/explicit-function-return-type': [
            'warn',
            {
                allowExpressions: true,
            },
        ],
        'react/no-find-dom-node': 'off', // TODO: 有待商榷
        '@typescript-eslint/no-use-before-define': [
            'warn',
            { functions: false },
        ],
        '@typescript-eslint/interface-name-prefix': 'off',
    },
}
