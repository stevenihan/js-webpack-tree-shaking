const path = require('path');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { modules: false }],
            ],
            plugins: ['@babel/plugin-proposal-class-properties'],
          }
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyWebpackPlugin({
        uglifyOptions: {
          keep_fnames: true,
          warnings: true
        }
      })
    ]
  }
};
