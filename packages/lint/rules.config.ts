import type { OxlintConfig } from 'oxlint';

import perfectionist from 'eslint-plugin-perfectionist';
import sonarjs from 'eslint-plugin-sonarjs';

export const BaseLinter: OxlintConfig = {
	plugins: ['eslint', 'typescript', 'node', 'promise'],
	categories: {
		correctness: 'error',
		perf: 'error',
	},
	jsPlugins: [
		{
			name: 'perfectionist',
			specifier: 'eslint-plugin-perfectionist',
		},
		{
			name: 'sonarjs',
			specifier: 'eslint-plugin-sonarjs',
		},
		{
			name: 'prettier',
			specifier: 'eslint-plugin-prettier',
		}
	],
	rules: {
		'eslint/prefer-const': 'error',
		'node/callback-return': 'error',
		'prettier/prettier': [
			'error',
			{
				bracketSpacing: true,
				endOfLine: 'auto',
				printWidth: 120,
				semi: true,
				singleQuote: true,
				tabWidth: 2,
				trailingComma: 'all',
				useTabs: true,
			},
		],
		'typescript/consistent-type-exports': 'error',
		'typescript/consistent-type-imports': 'error',
		'typescript/no-unused-vars': 'error',

		...sonarjs.configs!.recommended.rules,
		'sonarjs/no-unused-vars': 'off',
		'sonarjs/unused-import': 'off',
		'sonarjs/todo-tag': 'off',

		...perfectionist.configs['recommended-natural'].rules,
		'perfectionist/sort-interfaces': [
			'error',
			{
				groups: ['unknown', 'method'],
				order: 'asc',
				type: 'alphabetical',
			},
		],
		'perfectionist/sort-object-types': [
			'error',
			{
				groups: ['unknown', 'method'],
				order: 'asc',
				type: 'alphabetical',
			},
		],
	},
};

export const LumartinezReactLinter: OxlintConfig = {
	extends: [BaseLinter],
	plugins: ['react', 'react-perf'],
	categories: {
		correctness: 'error',
		perf: 'error',
	}
};
