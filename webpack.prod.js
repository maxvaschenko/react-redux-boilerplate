const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BrotliGzipPlugin = require('brotli-gzip-webpack-plugin')

process.env.NODE_ENV = 'production'

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.join(__dirname, 'public/'),
    filename: 'js/[name]-[hash:5].min.js',
    chunkFilename: 'js/[name]-[hash:5].min.js',
    publicPath: '/',
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:5].css',
    }),
    new BrotliGzipPlugin({
      asset: '[path].br[query]',
      algorithm: 'brotli',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
      quality: 11,
    }),
    new BrotliGzipPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
})
