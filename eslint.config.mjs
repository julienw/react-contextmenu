import path from 'node:path';
import { fileURLToPath } from 'node:url';

import globals from 'globals';
import babelParser from '@babel/eslint-parser';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    {
        ignores: ['examples/bundle.js']
    },
    ...compat.extends('vkbansal', 'vkbansal/react'),
    {
        languageOptions: {
            globals: {
                ...globals.browser
            },

            parser: babelParser
        },

        settings: {
            react: {
                version: 'detect'
            }
        },

        rules: {
            'react/no-array-index-key': 0
        }
    }
];
