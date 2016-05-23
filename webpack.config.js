var config = {
    entry: [
        'core-js/es6/object.js',
        'core-js/es6/promise.js',
        './index'
    ],
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