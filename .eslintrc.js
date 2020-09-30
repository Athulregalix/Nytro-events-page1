module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["prettier", "html"],
  rules: {
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
  },
  parserOptions: {
    sourceType: "module",
  },
};
