function promisedTimeout(data, time) {
  return new Promise((res) => {
    setTimeout(() => {
      res(data);
    }, time);
  });
}

export function check(data) {
  return new Promise((res, rej) => {
    if (typeof data !== 'number') return rej(Error('error'));
    switch (data % 2 === 0) {
      case true:
        setTimeout(() => {
          res('even');
        }, 1000);
        break;
      case false:
        setTimeout(() => { res('odd'); }, 2000);
        break;
      default:
        return rej(new Error('Unexpected condition'));
    }
  });
}

export function log(result) {
  console.log(`Your number is ${result}`);
}

export async function checkAsync(data) {
  if (typeof data !== 'number') throw Error('error');
  switch (data % 2 === 0) {
    case true:
      return promisedTimeout('even', 1000);
    case false:
      return promisedTimeout('odd', 2000);
    default:
      throw Error('Unexpected condition');
  }
}

export function logAsyncCheck(result) {
  console.log(`Async/Await: Your number is ${result}`);
}
