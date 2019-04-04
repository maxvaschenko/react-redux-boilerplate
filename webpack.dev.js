const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.join(__dirname, 'public/'),
    filename: 'js/[name].min.js',
    chunkFilename: 'js/[name].min.js',
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    index: 'index.html',
    contentBase: __dirname,
    host: '0.0.0.0',
    port: 9000,
    publicPath: '/',
    historyApiFallback: true,
    openPage: '/different/page',
    disableHostCheck: true,
    watchOptions: {
      poll: true,
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash:5].css',
    }),
    /*
    new BundleAnalyzerPlugin({
     openAnalyzer: false,
     analyzerHost: 'localhost',
     analyzerPort: '9001',
     }),
     */
  ],
})
