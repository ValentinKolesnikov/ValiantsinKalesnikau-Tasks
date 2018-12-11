const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		'polyfills': './src/polyfills.ts',
		'app': './src/main.ts'
	},
	output: {
		path: path.resolve(__dirname, 'public'), 
		publicPath: '/public/',
		filename: "[name].js" 
	},
	devServer: {
		historyApiFallback: true,
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	module: {
		rules: [ 
			{
				test: /\.ts$/,
				use: [{
						loader: 'awesome-typescript-loader',
						options: {
							configFileName: path.resolve(__dirname, 'tsconfig.json')
						}
					},
					'angular2-template-loader'
				]
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader',
					options: {
						attrs: [':data-src']
					}
				}
			}
			
		]
	},
	plugins: [
		new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core/,
			path.resolve(__dirname, 'src'), 
			{} 
		)
	]
}