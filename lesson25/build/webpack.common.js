const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		main: './src/index.js',
	},
	resolve:{
		// 如果配置的过多，webpack救护查找多次，对性能有一定损耗 一般只配置逻辑js类型比如：vue jsx后缀
		extensions:['.js','.jsx'],   // 根据页面引入的文件 先去匹配js和jsx结尾的文件
		/*mainFiles:['index','child'],  // 当你引入一个目录下的文件时，会先尝试去找以index开头的文件，如果没有就匹配child开头的文件,（一般不建议配置这个字段）
		alias:{
			components:path.resolve(__dirname,'../src/child')  // 当匹配components或者字符串components的时候，会指向配置的文件目录
		}*/
	},
	module: {
		rules: [{
			// 匹配到js 或者jsx都执行下方babel-loader
			test: /\.jsx?$/,
			// 排除node_modules 的loader检测，可以提升webpack速度
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader'
			}]
		}, {
			test: /\.(jpg|png|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					name: '[name]_[hash].[ext]',
					outputPath: 'images/',
					limit: 10240
				}
			}
		}, {
			test: /\.(eot|ttf|svg)$/,
			use: {
				loader: 'file-loader'
			}
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new CleanWebpackPlugin(['dist'], {
			root: path.resolve(__dirname, '../')
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			_join: ['lodash', 'join']
		}),
	],
	optimization: {
		runtimeChunk: {
			name: 'runtime'
		},
		usedExports: true,
		splitChunks: {
      chunks: 'all',
      cacheGroups: {
      	vendors: {
      		test: /[\\/]node_modules[\\/]/,
      		priority: -10,
      		name: 'vendors',
      	}
      }
    }
	},
	performance: false,
	output: {
		path: path.resolve(__dirname, '../dist')
	}
}
