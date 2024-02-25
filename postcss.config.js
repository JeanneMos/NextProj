module.exports = {
	plugins: [
		"postcss-nested",
		[
			"postcss-pxtorem",
			{
				rootValue: 16,
				unitPrecision: 5,
				propList: [
					"font",
					"font-size",
					"line-height",
					"letter-spacing",
					"margin*",
					"padding*",
					"gap",
					"width",
					"height",
				],
				selectorBlackList: [],
				replace: true,
				mediaQuery: false,
				minPixelValue: 0,
				exclude: /node_modules/i,
			},
		],
	],
};
