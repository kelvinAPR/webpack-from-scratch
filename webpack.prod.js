const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const common = require('./webpack.common');

require('dotenv').config();

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    // setting this instead of using .env
    new webpack.DefinePlugin({
      'process.env.BASE_URL_PROD': JSON.stringify(process.env.BASE_URL_PROD),
    }),
    new HtmlWebpackPlugin({
      template: 'src/template.html',
    }),
    // new MiniCssExtractPlugin({
    //   filename: '[name].[contentHash].css',
    // }),
    new CleanWebpackPlugin(),
  ],
  devtool: 'nosources-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          // extract css into files
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
});
