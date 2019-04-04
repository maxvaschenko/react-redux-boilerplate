const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, './src/index.js')],
  node: {
    __filename: true,
  },
  optimization: {
    runtimeChunk: {
      name: 'vendor',
    },
    splitChunks: {
      cacheGroups: {
        default: false,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  watchOptions: {
    poll: 1000,
  },
  resolve: {
    modules: [path.resolve(__dirname, './src/'), 'node_modules', 'bower_components'],
    extensions: ['.js', '.jsx', '.scss', '.json'],
    alias: {
      src: path.resolve(__dirname, 'src'),
      assets: path.resolve('src/assets'),
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['>1%', 'not dead', 'ie >= 10', 'not op_mini all'],
                }),
              ],
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.(woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'fonts',
          },
        },
      },
      {
        test: /.(png|jpg|jpeg|ico|gif|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'img',
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      title: 'Application',
      favicon: 'src/assets/favicon.ico',
      template: './index.html',
      filename: './index.html',
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|ka/),
  ],
}
