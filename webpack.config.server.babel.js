// var webpack = require('webpack')
// var path = require('path')
import path from 'path'

module.exports = {
  entry: './server/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/server/'),
    filename: 'index.js'
    // publicPath: '/js/'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
  }
}
