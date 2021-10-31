import {
  isSymbolInclude, isSymbolInclude1, isSymbolInclude2, isBlank, abbrev, displayBigger, sortNums,
} from './utils';

test('isSymbolInclude:', () => {
  expect(isSymbolInclude('qwerty', 'w')).toBe(true);
  expect(isSymbolInclude('qwerty', 's')).toBe(false);
});

test('isSymbolInclude1:', () => {
    expect(isSymbolInclude1('qwerty', 'w')).toBe(true);
    expect(isSymbolInclude1('qwerty', 's')).toBe(false);
  });

  test('isSymbolInclude2:', () => {
    expect(isSymbolInclude2('qwerty', 'w')).toBe(true);
    expect(isSymbolInclude2('qwerty', 's')).toBe(false);
  });


  test('isBlank:', () => {
    expect(isBlank('   ')).toBe(true);
    expect(isBlank('')).toBe(true);
    expect(isBlank('qwerty')).toBe(false);
  });

  test('abbrev:', () => {
    expect(abbrev('John Jonson')).toBe('J.J.');
    expect(abbrev('john jonson')).toBe('J.J.');
  });

  test('displayBigger:', () => {
    expect(displayBigger(-5,5)).toBe(5);
    expect(displayBigger(5,-5)).toBe(5);
    expect(displayBigger(-5,-5)).toBe('equal');
  });

  test('sortNums:', () => {
    expect(sortNums(6,5,-5)).toStrictEqual([-5,5,6]);
    expect(sortNums(-5,5,-1)).toStrictEqual([-5,-1,5]);
    expect(sortNums(0,-5,5)).toStrictEqual([-5,0,5]);
  });