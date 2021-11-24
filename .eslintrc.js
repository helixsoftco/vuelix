module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // The "prettier" extend comes from 'eslint-config-prettier' which disables eslint rules that may conflict with prettier
  extends: ['eslint:recommended', 'plugin:vue/essential', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  /**
   * The "prettier" plugin comes from 'eslint-plugin-prettier' which integrates prettier rules into eslint rules,
   * this plugins is what allows to display a warn directly in the editor for related prettier rules
   * See: https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
   */
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['warn'],
  },
}
