'use strict';
var path = require('path');
module.exports = {
  context: __dirname + '/javascripts',
  // context: path.resolve('javascripts'),
  entry: ['./app'],
  output: {
    path: path.resolve('public/assets/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css'
      }
    ]
  }
};
