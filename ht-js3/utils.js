/*
1. Write a JavaScript function to get the last element of an array
2. Write a simple JavaScript program to join all elements of the
    following array into a string
3. There are two arrays with individual values, write a
    JavaScript program to compute the sum of each individual
    index value from the given arrays and save them to third
    array
4. Write a JavaScript program to calculate the area and
    perimeter of a rectangle. Rectangle should be an object with
    properties width and height and methods getArea() and
    getPerimeter();
*/
import err from './error.messages';

export function getLastElem(array) {
  if (!array.length) throw new Error(err.arrayEmpty);
  return array[array.length - 1];
}

export function arrayToString(array) {
  return array.join();
}

export function arrayCombine(arr1, arr2) {
  if (!arr1.length || !arr2.length) throw new Error(err.arrayEmpty);
  if (arr1.length !== arr2.length) throw new Error(err.differentLengths);
  const res = [];
  for (let i = 0; i < arr1.length; i += 1) {
    res.push(arr1[i] + arr2[i]);
  }
  return res;
}

export const rectangle = {
  width: 0,
  height: 0,
  getPerimeter() {
    if (this.width === 0 || this.height === 0) throw new Error(err.rectangleSideZero);
    return 2 * (this.width + this.height);
  },
  getArea() {
    if (this.width === 0 || this.height === 0) throw new Error(err.rectangleSideZero);
    return this.width * this.height;
  },
};
