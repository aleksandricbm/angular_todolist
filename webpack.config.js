const path = require('path');
var webpack = require('webpack');
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
    // plugins:[
    //     new webpack.ProvidePlugin({
    //         jQuery: 'jquery',
    //         $: 'jquery',
    //         jquery: 'jquery',
    //         Popper: ['popper.js', 'default'],
    //         Util: "exports-loader?Util!bootstrap/js/dist/util",
    //         Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
    //         // bootstrap: 'bootstrap'
    //         // angular: 'angular'
    //     })
    // ],
    devtool: "#inline-source-map"
}
