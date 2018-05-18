var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const ROOT = path.resolve(__dirname, 'source', 'client')
const NODE_MODULES = path.resolve(__dirname, 'node_modules')
const STATIC = path.resolve(ROOT, 'static')

module.exports = {
  entry: [path.resolve(ROOT, 'index.jsx')],
  output: {
    path: path.resolve(__dirname, 'distribution'),
    filename: '[name].app.js',
    publicPath: '/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: ROOT,
        enforce: 'pre',
        use: [{loader: 'babel-loader'}, {loader: 'source-map-loader'}],
      },
      {
        test: /\.css$/,
        include: [ROOT, NODE_MODULES],
        use: [
          {loader: 'style-loader', options: {sourceMap: true}},
          {loader: 'css-loader', options: {sourceMap: true}},
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: [ROOT, NODE_MODULES],
    symlinks: false,
    cacheWithContext: false,
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(STATIC, 'index.html'),
    }),
    new webpack.NamedModulesPlugin(),
  ],
}
