module.exports = {
  extends: [
    "airbnb",
  ],
  ignorePatterns: [
    '.eslintrc.js',
    'dist/*/',
    'dist/*',
    'node_modules',
  ],
  rules: {
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react/jsx-max-props-per-line": [
      'warn', {
        maximum: 3,
      },
    ],
    "import/extensions": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
  },
  root: true,
};