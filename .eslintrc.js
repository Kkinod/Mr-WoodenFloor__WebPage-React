module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js', 'jest.config.js', 'jest-e2e.config.js', 'bin/**/*', 'dist/**/*'],
    // what configurations we want to extend
    rules: {
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'interface',
                prefix: ['I'],
                format: ['StrictPascalCase'],
            },
            { selector: 'class', format: ['StrictPascalCase'] },
        ],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        'prettier/prettier': ['off', { singleQuote: true }],
        // 'prettier/prettier': ['error', { endOfLine: 'off' }],
    },
};
