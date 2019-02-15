module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: '/node_modules/' },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: '/node_modules/' },
            { test: /\.css$/, loader: ['style-loader', 'css-loader'], exclude: '/node_modules/' }
        ]
    }
}