module.exports = {
  'env': {
    'browser': true,
    'jest': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'airbnb',
    'prettier',
  ],
  'plugins': [
    'prettier',
  ],
  'rules': {
    'prettier/prettier': ['error', {
      'singleQuote': true,
      'trailingComma': 'es5'
    }],
    'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
    'react/prefer-stateless-function': "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": ["src/tests/**"],
        "optionalDependencies": false,
        "peerDependencies": false
      }
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: [],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    }
  }
}