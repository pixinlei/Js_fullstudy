module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  loader: [
    {
      test: /\.scss$/,
      loader: 'sass-loader!style-loader!css-loader',
   }
  ]
}
