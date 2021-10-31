/*
Write a JavaScript function to check if given string includes given symbol.
Write a JavaScript function to check whether a string is blank or not (string with spaces should be also blank).
Write a JavaScript function to convert a string in abbreviated form.
console.log(abbrev (“Name Surname")) – should be “N.S.” (should convert lower case names to upper)
Write a JavaScript function that accept two integers and display the larger.
 Write a JavaScript function with conditional statement to sort three numbers
*/
export function isSymbolInclude(str, symbol) {
  return str.includes(symbol);
}

export function isSymbolInclude1(str, symbol) {
  return str.indexOf(symbol) !== -1;
}

export function isSymbolInclude2(str, symbol) {
  const regExp = new RegExp(symbol);
  return regExp.test(str);
}

export function isBlank(str) {
  return str.trim() === '';
}

export function abbrev(str) {
  const abbrevArray = str.split(' ');
  return `${abbrevArray[0].charAt(0).toUpperCase()}.${abbrevArray[1].charAt(0).toUpperCase()}.`;
}

export function displayBigger(a, b) {
  const bigger = a > b ? a : a === b ? 'equal' : b;
  console.log(`DisplayBigger of ${a} and ${b} is ${bigger}`);
  return bigger;
}

export function sortNums(...args) {
  const array = [...args];
  for (let j = 0; j < array.length; j += 1) {
    for (let i = 0; i < array.length - j - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        const tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
      }
    }
  }
  return array;
}
