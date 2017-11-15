const path = require('path');
var webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: './app/app.module.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    	filename: 'bundle.js'
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        { test: /\.html$/, loader: "html" },
        { test: /\.css$/, loader: "style!css" }
      ]
    },
    devServer: {
         proxy: {
            '/api/*': {
                'target': "http://localhost:3000",
                'secure': false,
                'logLevel': 'debug'
            }
    }
    },
    devtool: "#inline-source-map",
    plugins: [
        new Dotenv({
          path: './.env',
          safe: false
        }),
        // new UglifyJSPlugin()
    ]
}
