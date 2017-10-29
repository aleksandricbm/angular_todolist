const path = require('path');
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
            loader: 'babel-loader',
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
    devtool: "#inline-source-map"
}
