module.exports = {
	collectCoverageFrom: ['src/**/*.{ts,tsx}'],
	coveragePathIgnorePatterns: ['/node_modules/'],
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.test.json',
		},
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	testEnvironment: 'jest-environment-jsdom-sixteen',
	testMatch: ['<rootDir>/**/*.test.{ts,tsx}'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
};
