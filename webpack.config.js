var config = {
    entry: './index',
    output: {
        filename: 'bundle.js',
        publicPath: '/redux-async-actions-reducers-demo/'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel'}
        ]
    }
};

module.exports = config;