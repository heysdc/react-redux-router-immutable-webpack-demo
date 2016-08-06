// var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './client/components/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/client'),
    filename: 'index.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
  }
}
