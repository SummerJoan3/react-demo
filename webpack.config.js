/* eslint-disable no-undef */
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(sc|c|le)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader?modules=true',
          'sass-loader',
          'less-loader?javascriptEnabled=true'
        ]
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].css',
      chunkFilename: devMode ? '[id].css' : '[id].css'
    })
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  }
};
