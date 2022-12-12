const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'my-first-webpack.bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
      mode: 'development',
      devServer: {
        static: path.resolve(__dirname, 'dist')
      },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-react']
                  }
                }
              },
              {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
      ],
  };