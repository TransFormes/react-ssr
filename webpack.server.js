const path = require('path');
const externals = require('webpack-node-externals');

module.exports= {
    mode: 'development',
    target: 'node',
    entry: './server/index.js',
    externals: [externals()],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'build')
    },
    module:{
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react','@babel/preset-env']
                }
            }
        ]
    }
}