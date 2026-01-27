module.exports = {
  root: true,
  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    'prettier' // ✅ 必须放最后：关闭与 Prettier 冲突的 ESLint 格式规则
  ],

  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: 'module'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
