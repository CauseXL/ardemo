const path = require('path');
const webpack = require('webpack');

const APP_PATH = `${__dirname}/resources/assets`;
const BUILD_PATH = `${__dirname}/public/assets`;
const isProd = process.env.NODE_ENV === 'production';

const config = {
    mode: 'none',
    // Entries settings
    entry: {
        app: './src/index.js',
    },

    // Output Settings
    output: {
        // path: BUILD_PATH,
        filename: 'bundle.js',
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],

    resolve: {
        extensions: [
            '.js',
        ],
    },
    devtool: 'source-map',
};

module.exports = config;
