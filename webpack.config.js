'use strict';
// module.exports = {
//   context: __dirname + '/public/javascripts',
//   entry: './app.jsx',
//   output: {
//     filename: 'app.js',
//     path: __dirname + '/public/dist'
//   }
// };
console.log(__dirname);

module.exports = {
  context: __dirname + '/public/javascripts',
  entry: ['./app.js'],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      }
    ]
  }
};