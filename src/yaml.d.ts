// Lets TypeScript understand `import data from '...yaml'` (parsed by @rollup/plugin-yaml).
declare module '*.yaml' {
	const data: unknown;
	export default data;
}

declare module '*.yml' {
	const data: unknown;
	export default data;
}
