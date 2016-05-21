var config = {
    entry: './index',
    output: {
        filename: 'bundle.js',
        publicPath: '/react-async-actions-reducers-demo/'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel'}
        ]
    }
};

module.exports = config;