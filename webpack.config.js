var webpack = require('webpack')

module.exports = {
  entry: './client/components/index.js',
  output: { path: './dist/client/js/', filename: 'index.js' },
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
  }
}
