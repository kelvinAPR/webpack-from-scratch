module.exports = {
  entry: {
    main: ['@babel/polyfill', './src/index.jsx'],
    // vendor: ['./src/vendor.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(jpe?g|gif|png|woff|woff2|eot|ttf|svg|csv)(\?.*$|$)/,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            name: '[name].[hash].[ext]',
            outputPath: 'imgs',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.jpg', '.png'],
  },
};
