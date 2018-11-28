let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
	entry: "./src/app.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: '/node-modules/'
			},
			{
				test: /\.css$/,
				use: [
					{loader: "style-loader"},
					{loader: "css-loader"}
				]
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	plugins:[new HtmlWebpackPlugin()]

}