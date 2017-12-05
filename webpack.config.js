/**
 * webpack.config.js
 * @author Daniel Park <work@danielpark.me>
 * Webpack configuration file.
 */

// Require necessary modules.
const webpack = require('webpack');
const path = require('path');

// Use Webpack plugins.
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractCss = new ExtractTextPlugin({ filename: './css/[name].[contenthash].css' });

module.exports = {
  // Declare the absolute path for project root.
  context: path.resolve(__dirname, 'src'),

  // Entry point for our application.
  entry: {
    app: './app.js',
    vendor: ['jquery', 'lodash', 'aos']
  },

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].bundle.js'
  },

  // Plugins for Webpack configuration.
  plugins: [
    // Clean up 'dist' folder on build.
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    extractCss
  ],

  // Module loader configuration.
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['env'] }
        }
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.scss$/,
        use: extractCss.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/media/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },

  // Webpack Dev Server configuration.
  devServer: {
    // Specify where static files are served.
    contentBase: path.resolve(__dirname, "./dist/assets/media"),
    watchContentBase: true,
    compress: true,
    port: 1234,
    stats: 'errors-only'
  },

  // Other configuration.
  devtool: 'inline-source-map'
}
