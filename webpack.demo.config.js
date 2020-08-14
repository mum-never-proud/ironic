const path = require('path');

module.exports = {
  mode: 'production',
  entry: './ironic-demo-app/app.jsx',
  output: {
    filename: 'app.min.js',
    path: path.resolve(__dirname, 'docs'),
  },
  resolve: {
    alias: {
      ironic: path.resolve(__dirname, 'dist/ironic.min.js'),
      utils: path.resolve(__dirname, 'ironic-demo-app/utils'),
      images: path.resolve(__dirname, 'ironic-demo-app/public/images'),
      reducers: path.resolve(__dirname, 'ironic-demo-app/reducers'),
      store: path.resolve(__dirname, 'ironic-demo-app/store'),
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
