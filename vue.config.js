const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	configureWebpack: {
		plugins: [
			new CopyWebpackPlugin([
				'./src/assets/style/*.css'
			],
			[
				'./public/style/'
			])
		]
	}
}
