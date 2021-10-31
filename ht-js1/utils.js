import * as constant from './constant';

export function sumUp(a, b) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  throw Error('Parameters are not integers!');
}

export function testString(input) {
  return constant.TEST_STR + input;
}

export function printFullName(firstName, lastName, age) {
    let str = `${firstName} ${lastName} is ${age} years old.`;
  console.log(str);
  return str;
}

export function isBiggerThen100(number) {
  return (number > 100);
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function isFirstBigger(a, b) {
  return (a > b);
}

export function checkFor50(a, b) {
  if (a === 50 || b === 50 || a + b === 50) {
    console.log(true);
    return true;
  }
  return false;
}

export function divide7or3(a) {
  return (a % 7 === 0 || a % 3 === 0);
}
