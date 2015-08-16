var path = require('path');

module.exports = {
  entry: './js/entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      {
        test: /\.js$/,
         include: [
           path.resolve(__dirname, 'js'),
         ],
        loader: 'babel-loader'
      },
    ]
  }
};
