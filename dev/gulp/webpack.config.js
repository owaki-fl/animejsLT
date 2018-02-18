const webpack = require('webpack')

module.exports = {
  entry: {
    'js/main': './dev/assets/js/main.js'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', { modules: false }]
            ]
          }
        }]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(eot|svg|woff|ttf|gif)$/,
        use: ['url-loader']
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin(
      {
        jQuery: 'jquery',
        $: 'jquery',
        'window.jQuery': 'jquery'
      }
    )
  ]

}
