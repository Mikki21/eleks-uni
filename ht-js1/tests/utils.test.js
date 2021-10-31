import { sumUp, testString, printFullName, isBiggerThen100, isFirstBigger, checkFor50, divide7or3} from '../utils';
import { TEST_STR } from '../constant';
import errors from "../err.messages";

test('sumUp:', () => {
  expect(() => sumUp(1, { 1: 2 })).toThrow(errors.onlyIntegers);
  expect(sumUp(-5, 5)).toBe(0);
  expect(sumUp(-10, -10)).toBe(-20);
  expect(sumUp(20, 30)).toBe(50);
});

test('testString:', () => {
  expect(testString('')).toBe(TEST_STR);
  expect(testString('Hello')).toBe(`${TEST_STR}Hello`);
});

test('printFullName:', () => {
  expect(printFullName('a','b',10)).toBe('a b is 10 years old.');
});

test('isBiggerThen100:', () => {
  expect(isBiggerThen100(101)).toBe(true);
  expect(isBiggerThen100(100)).toBe(false);
  expect(isBiggerThen100(99)).toBe(false);
});

test('isFirstBigger:', () => {
  expect(isFirstBigger(5,1)).toBe(true);
  expect(isFirstBigger(1,5)).toBe(false);
  expect(isFirstBigger(1,1)).toBe(false);
});

test('checkFor50:', () => {
  expect(checkFor50(25,25)).toBe(true);
  expect(checkFor50(50,1)).toBe(true);
  expect(checkFor50(1,50)).toBe(true);
  expect(checkFor50(1,51)).toBe(false);
});

test('divide7or3:', () => {
  expect(divide7or3(21)).toBe(true);
  expect(divide7or3(9)).toBe(true);
  expect(divide7or3(25)).toBe(false);
});