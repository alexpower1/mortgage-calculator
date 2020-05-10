const plugins = [
	'@babel/plugin-transform-runtime',
	'@babel/proposal-class-properties',
	'@babel/proposal-object-rest-spread',
];

module.exports = {
	presets: [
		[
			'@babel/env',
			{
				modules: false,
				useBuiltIns: 'usage',
				corejs: { version: 3 },
			},
		],
		'@babel/react',
		'@babel/typescript',
	],
	plugins,
};
