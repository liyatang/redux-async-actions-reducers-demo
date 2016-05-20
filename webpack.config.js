var config = {
    entry: './index',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel'}
        ]
    }
};

module.exports = config;