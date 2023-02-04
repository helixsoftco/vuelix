module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // Avoids the eslint: no-undef in "<script setup>" compiler macros
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    withDefaults: 'readonly',
    defineExpose: 'readonly',
  },
  // The "prettier" extend comes from 'eslint-config-prettier' which disables eslint rules that may conflict with prettier
  // Using vue3 recommended rules, See: https://eslint.vuejs.org/rules/#priority-c-recommended-minimizing-arbitrary-choices-and-cognitive-overhead-for-vue-js-3-x
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: 'vue-eslint-parser',
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
    'vue/multi-word-component-names': ['off'],
  },
}
