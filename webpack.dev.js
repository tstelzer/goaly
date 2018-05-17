var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const ROOT = path.resolve(__dirname, 'source', 'client')
const NODE_MODULES = path.resolve(__dirname, 'node_modules')

module.exports = {
  entry: path.resolve(ROOT, 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'distribution'),
    filename: '[name].app.js',
    publicPath: '/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: ROOT,
        use: [
          'source-map-loader',
          'ts-loader',
        ],
      },
      {
        test: /\.css$/,
        include: [
          ROOT,
          NODE_MODULES,
        ],
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
      ROOT,
      NODE_MODULES,
    ],
    symlinks: false,
    cacheWithContext: false,
  },
  serve: {},
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(ROOT, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
}
