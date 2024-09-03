import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  {
    ignores: [
      '*.ts',
      'node_modules',
      'public',
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      //Because auto imports -.-
      'no-undef': 'off',
    },
  }
)