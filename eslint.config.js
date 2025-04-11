import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            prettier
        },
        rules: {
            ...reactHooks.configs.recommended.rules, // Apply recommended React Hooks rules
            eqeqeq: ['error', 'always'],
            '@typescript-eslint/no-explicit-any': 'warn', // Warn when using the 'any' type
            'prefer-const': 'warn', // Suggest using 'const' when variables are not reassigned
            'prettier/prettier': 'error' //gives prettier error
        }
    }
)
