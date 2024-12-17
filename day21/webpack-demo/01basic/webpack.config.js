const path = require('path')

module.exports = {
    "mode": "development",
    "entry": "./app/index.js",
    "output": {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
}