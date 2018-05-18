module.exports = function(env = 'development') {
  return require(`./webpack.${env}.js`)
}
