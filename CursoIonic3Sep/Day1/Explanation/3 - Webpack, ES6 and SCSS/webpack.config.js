var path = require('path');

module.exports = {

  entry: [
    './src/main.js',
    './src/main.scss'
  ],

  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'main.bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap',
          'sass-loader?sourceMap'
        ]
      }
    ]
  },

  stats: {
    colors: true
  },

  devtool: 'source-map',

  devServer: {
    contentBase: 'www/',
    open: true
  }
};