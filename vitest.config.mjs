import { defineConfig } from 'vitest/config';

export default defineConfig({
	// n8n-workflow ships sourcemaps without source files; hide the harmless noise.
	logLevel: 'error',
	test: {
		globals: true,
		environment: 'node',
		setupFiles: ['./test/setup.ts'],
		include: ['test/**/*.test.ts'],
	},
});
