const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
  target: 'web',
  devtool: 'cheap-module-source-map',
  entry: './src/Index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    stats: 'minimal',
    overlay: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
  },
  plugins: [
    // saved for interesting posibilities
    // new webpack.DefinePlugin({
    //     "process.env.API_URL": JSON.stringify("http://localhost:3001"),
    // }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      //favicon:"src/favicon.ico"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
