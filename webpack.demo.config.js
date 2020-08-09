const path = require('path');

module.exports = {
  mode: 'production',
  entry: './demo-assets/ironic-demo.jsx',
  output: {
    filename: 'ironic-demo.min.js',
    path: path.resolve(__dirname, 'docs'),
  },
  resolve: {
    alias: {
      ironic: path.resolve(__dirname, 'dist/ironic.min.js'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js(x)/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.svg/,
        use: [
          'svg-url-loader',
        ],
      },
    ],
  },
};
