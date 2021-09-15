const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path'); // used to resolve absolute path to project's root directory (where web pack.config.js should be located)

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/, // property identifies which file or files should be transformed.
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // property indicates which loader should be used to do the transforming.
                    options: {
                        presets: ['@babel/preset-react'],
                    }
                },
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin()],
    mode: 'production',
};