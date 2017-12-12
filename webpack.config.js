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
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractCss = new ExtractTextPlugin({ filename: './css/[name].css' });

module.exports = {
  // Declare the absolute path for project root.
  context: path.resolve(__dirname, 'src'),

  // Entry point for our application.
  entry: {
    intro: './intro_page/app.js',
    landing: './landing_page/app.js',
    vendors: './vendors.js',
    features: './features/app.js'
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
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendors",
      // filename: "vendor.js"
      // (Give the chunk a different name)

      minChunks: Infinity,
      // (with more entries, this ensures that no other module
      //  goes into the vendor chunk)
    }),
    new HtmlWebpackPlugin({
      title: 'Intro',
      filename: 'intro_page.html',
      template: './intro_page/index.html',
      chunks: ['vendors', 'intro']
    }),
    new HtmlWebpackPlugin({
      title: 'Landing',
      filename: 'landing_page.html',
      template: './landing_page/index.html',
      chunks: ['vendors', 'landing']
    }),
    new HtmlWebpackPlugin({
      title: 'Life On Tour - James Blake',
      filename: 'james_blake.html',
      template: './features/james_blake.html',
      chunks: ['vendors', 'features']
    }),
    new CopyWebpackPlugin([
      {
        from: './assets/media/images',
        to: './media/images'
      }
    ]),
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
              loader: 'resolve-url-loader'
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
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './media/images/'
            }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './media/fonts/',
              publicPath: '/'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './media/fonts/',
              publicPath: '/'
            }
          }
        ]
      }
    ]
  },

  // Webpack Dev Server configuration.
  devServer: {
    // Specify where static files are served.
    contentBase: path.resolve(__dirname, "./dist"),
    watchContentBase: true,
    compress: true,
    port: 1234,
    stats: 'errors-only'
  },

  // Other configuration.
  devtool: 'inline-source-map'
}
