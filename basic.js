const manga = 'eleceed';
function primeChecker(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(primeChecker(5));

function mulx(x, start, stop) {
  const arr = [];
  for (let i = start; i <= stop; i++) {
    if (i % x === 0) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(mul3(2, 10, 100));

function factorial(n) {
  if (n < 1) {
    return;
  }
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
