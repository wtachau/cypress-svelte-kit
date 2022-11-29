import { resolve } from 'path';
import type { UserConfig } from 'vite';
import { compilerOptions } from './.svelte-kit/tsconfig.json';

function resolveAliasesFromTypescriptConfig() {
	return Object.entries(compilerOptions.paths).reduce((acc, [key, [value]]) => {
		const aliasKey = key.substring(0, key.length - 2);
		const path = value.substring(0, value.length - 2);
		return { ...acc, [aliasKey]: resolve(__dirname, path) };
	}, {});
}

const config: UserConfig = {
	resolve: {
		alias: resolveAliasesFromTypescriptConfig()
	},
	server: {
		port: 3000
	}
};

export default config;
