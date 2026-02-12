module.exports = {
  root: true,

  env: {
    node: true,
  },

  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: "module",
  },

  extends: ["plugin:vue/essential", "@vue/standard", "prettier"],

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
