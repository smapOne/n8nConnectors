import tseslint from 'typescript-eslint';

export default [
	...tseslint.configs.recommended,
	{
		settings: {
			'import/resolver': {
				typescript: true,
				node: {
					extensions: ['.js', '.ts'],
				},
			},
		},

        ignores: [
			'dist/**',
			'node_modules/**',
		],
	},
];