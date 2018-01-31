const ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

var path = require("path");
var __layouts = './scripts/Layouts/';

module.exports = {
    context: __dirname,
    entry: {
        index: __layouts + 'index.jsx',
    },
    output: {
        path: path.join(__dirname + '/scripts/bundles/'),
        filename: '[name].js',
        devtoolModuleFilenameTemplate: '[resourcePath]',
        devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
    },
    module: {
        loaders: [
          {
            test: [/\.jsx?$/, /\.js?$/],
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
          },
          {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
          }
        ]
    },
    devtool: 'source-maps',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
              warnings: false
            }
        })
    ]
};