var config = {
    entry: './index',
    output: {
        filename: 'bundle.js',
        publicPath: '/redux-async-actions-reduces-demo/'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel'}
        ]
    }
};

module.exports = config;