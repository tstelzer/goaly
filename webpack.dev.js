var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.tsx',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].app.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'react-hot-loader/webpack' },
          { loader: 'source-map-loader' },
          { loader: 'awesome-typescript-loader' },
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
    symlinks: false,
    cacheWithContext: false,
  },
  devServer: {
    open: false,
    overlay: true,
    historyApiFallback: true,
    compress: true,
    hot: true,
    stats: 'errors-only',
  },
  devtool: 'cheap-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-hot-ts',
      chunksSortMode: 'dependency',
      template: 'src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // new HardSourceWebpackPlugin({
    //   cacheDirectory: './.cache/hard-source/[confighash]'
    // }),
  ],
};
