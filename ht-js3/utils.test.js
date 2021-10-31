import {
  getLastElem, arrayToString, arrayCombine, rectangle,
} from './utils';
import err from './error.messages';

test('getLastElem:', () => {
  expect(getLastElem([1, 2, 3, 4, 5, 6, 7])).toBe(7);
  expect(() => getLastElem([])).toThrowError(err.arrayEmpty);
});

test('arrayToString:', () => {
  expect(arrayToString(['1', '2', '3'])).toBe('1,2,3');
  expect(arrayToString([])).toBe('');
});

test('arrayCombine:', () => {
  expect(arrayCombine([1, 2, 3, 4], [1, 2, 3, 4])).toStrictEqual([2, 4, 6, 8]);
  expect(() => arrayCombine([1, 2, 3], [1, 2, 3, 4])).toThrowError(err.differentLengths);
  expect(() => arrayCombine([], [1, 2, 3, 4])).toThrowError(err.arrayEmpty);
  expect(() => arrayCombine([1, 2, 3, 4], [])).toThrowError(err.arrayEmpty);
});

test('rectangle object test:', () => {
  console.log(rectangle.width);
  expect(() => rectangle.getArea()).toThrowError(err.rectangleSideZero);
  expect(() => rectangle.getPerimeter()).toThrowError(err.rectangleSideZero);
  rectangle.height = 8;
  rectangle.width = 8;
  expect(rectangle.getPerimeter()).toBe(32);
  expect(rectangle.getArea()).toBe(64);
});
