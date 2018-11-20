const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	configureWebpack: {
		plugins: [
			new CopyWebpackPlugin([
				{
					from:'./src/assets/style/*.css',
					to : '',
					flatten : true
				},
				{
					from:'./src/assets/images',
					to : 'images/',
				}
			])
		]
	}
}
