var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const ROOT = path.resolve(__dirname, 'source', 'client')
const NODE_MODULES = path.resolve(__dirname, 'node_modules')

module.exports = {
  entry: [
    path.resolve(ROOT, 'index.tsx'),
  ],
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
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              plugins: ['react-hot-loader/babel'],
            },
          },
          'source-map-loader',
          {
            loader: 'ts-loader',
            options: {
              configFile: "tsconfig.dev.json",
            }
          },
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
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(ROOT, 'index.html'),
    }),
    new webpack.NamedModulesPlugin(),
  ],
}
