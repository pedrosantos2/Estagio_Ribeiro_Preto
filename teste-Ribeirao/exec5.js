function inverterString(str) {
  let invertedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
      invertedStr += str[i];
  }
  return invertedStr;
}

const minhaString = "Olá, mundo!";
const stringInvertida = inverterString(minhaString);
console.log(stringInvertida);
