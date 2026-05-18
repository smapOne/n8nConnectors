import tseslint from 'typescript-eslint';

export default [
	{
		ignores: [
			'dist/**',
			'node_modules/**',
		],
	},

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
	},
];