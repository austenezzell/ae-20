const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {
  prod_Path,
  src_Path
} = require('./path');
const {
  selectedPreprocessor
} = require('./loader');

module.exports = {
  entry: {
    main: './' + src_Path + '/index.js'
  },
  output: {
    path: path.resolve(__dirname, prod_Path),
    filename: '[name].[chunkhash].js'
  },
  devtool: 'source-map',
  devServer: {
    open: true,
  },
  module: {
    rules: [{
        test: selectedPreprocessor.fileRegexp,
        use: [{
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: selectedPreprocessor.loaderName,
            options: {
              sourceMap: true
            }
          },
        ]
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader',
        }],
      },

      {
        test: /\.(mov|mp4)$/,
        use: [{
          loader: 'file-loader',
        }],
      },

      {
        test: /\.(eot|woff|woff2|svg|ttf)$/,
        use: [{
          loader: 'file-loader',
        }],
      }

    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/gogoro.html',
      filename: 'gogoro.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/indigo.html',
      filename: 'indigo.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/cinco-design.html',
      filename: 'cinco-design.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/hank-pdx.html',
      filename: 'hank-pdx.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/hanour.html',
      filename: 'hanour.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/the-james-brand.html',
      filename: 'the-james-brand.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/nextbit.html',
      filename: 'nextbit.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/preso/index.html',
      filename: 'preso/index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/preso/background.html',
      filename: 'preso/background.html'
    })
  ]
};
