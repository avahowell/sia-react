// Sia renderer webpack configuration
const path = require('path')
module.exports = {
	entry: path.resolve('./src/renderer/index.js'),
	output: {
		filename: path.resolve('./bundle.js'),
	},
	resolve: {
		root: path.resolve('./node_modules')
	}, 
	resolveLoader: {
		root: path.resolve('./node_modules'),
	},
	target: 'electron',
	module: {
		// this noParse is to deal with an issue with validate.js not being packed properly.
		// see this issue: https://github.com/webpack/webpack/issues/138 for more information.
		noParse: /node_modules\/json-schema\/lib\/validate\.js/,
		preLoaders: [
			{
				test: /\.json$/,
				loader: 'json-loader',
			}
		],
		loaders: [
			{
				test: /\.js?$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			}
		]
	}
}