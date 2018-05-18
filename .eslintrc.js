module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    jest: true,
    es6: true,
  },
  plugins: ['react', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/standard',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: '2017',
      jsx: true,
      experimentalObjectRestSpread: true,
      impliedStrict: true,
    },
    sourceType: 'module',
  },

  rules: {
    'prettier/prettier': 'error',

    'no-const-assign': 'warn',
    'no-this-before-super': 'warn',
    'no-undef': 'error',
    'no-unreachable': 'error',
    'no-unused-vars': 'warn',
    'constructor-super': 'warn',
    'valid-typeof': 'warn',
    // FIXME: maybe introduce different rulesets for dev and prod
    'no-debugger': 'off',

    'react/prop-types': 'warn',
    'react/boolean-prop-naming': 'error',
    'react/display-name': 'warn',
    'react/no-access-state-in-setstate': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-update-set-state': 'error',
    'react/jsx-no-undef': 'error',
    'react/no-unused-prop-types': 'warn',
    'react/prefer-stateless-function': 'warn',
    // These rules are --fix able
    'react/jsx-boolean-value': ['error', 'always'
    ],
    'react/jsx-closing-tag-location': 'warn',
    'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'
    ],
    'react/jsx-equals-spacing': 'warn',
  },
}
