'use strict';
var path = require('path');
module.exports = {
  context: __dirname + '/javascripts',
  // context: path.resolve('javascripts'),
  entry: ['./app.js'],
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
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(jpg|png|ttf|eot)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000'
      }
    ]
  }
};
