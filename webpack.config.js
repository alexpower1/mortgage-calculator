const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: [path.join(__dirname, './src/index.tsx')],
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			'react-dom': '@hot-loader/react-dom',
		},
	},
	module: {
		rules: [
			{
				test: /\.[tj]sx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.s?css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
				exclude: /node_modules/,
				use: ['file-loader?name=[name].[ext]'],
			},
		],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devtool: 'source-map',
	devServer: {
		compress: true,
		historyApiFallback: true,
		hot: true,
		open: true,
		overlay: true,
		port: 8080,
		stats: 'errors-only',
		contentBase: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'styles.css',
			chunkFilename: 'styles.css',
		}),
	],
};
