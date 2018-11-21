const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	configureWebpack: {
		plugins: [
			new CopyWebpackPlugin([
				{
					// css
					from:'./src/assets/style/*.css',
					to : '',
					flatten : true
				},
				{
					// image
					from:'./src/assets/images',
					to : 'images/',
				},
				{
					// font
					from:'./src/assets/fonts',
					to : 'fonts/',
				},
				{
					from:'./api-dummy',
					to: 'api-dummy',
				}
			])
		]
	}
}
