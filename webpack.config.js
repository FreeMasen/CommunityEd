const path = require('path');
module.exports = function(env) {
    return {
        mode: 'development',
        devtool: 'sourcemap',
        entry: {
            app: path.join(__dirname, 'ts', 'index.ts'),
        },
        output: {
            path: path.join(__dirname, 'js'),
            filename: '[name].js'
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },
        module: {
            rules: [
                    {
                        test: /\.ts$/,
                        use: [
                            'awesome-typescript-loader',
                        ]
                    }
            ]
        },
    };
}