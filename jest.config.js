module.exports = {
  verbose: false,
  bail: false,
  transform: {'^.+\\.jsx?$': 'babel-jest'},
  moduleDirectories: ['node_modules', 'source/client'],
  modulePathIgnorePatterns: ['<rootDir>/archive', 'distribution'],
}
