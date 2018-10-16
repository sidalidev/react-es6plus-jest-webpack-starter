module.exports = {
    env: {
        jest: true,
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    settings: {
        react: {
            version: '^16.5.2', // React version, default to the latest React stable release
        },
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
    },
}
