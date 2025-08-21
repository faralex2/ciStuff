module.exports = {
  extends: [
    "stylelint-config-standard", // базовые правила
    "stylelint-config-css-modules", // поддержка CSS Modules (*.module.css / *.module.scss)
  ],
  plugins: ["stylelint-order"],
  rules: {
    "order/properties-alphabetical-order": true, // сортировка свойств по алфавиту
  },
  
  ignoreFiles: ["**/node_modules/**", "**/dist/**", "**/storybook-static/**"],  
};
