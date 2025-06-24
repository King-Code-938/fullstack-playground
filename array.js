let students = ['Tobi', 'Ada', 'Chika', 'Yusuf'];
students.pop(); // removes "Yusuf"
students.shift(); // removes "Tobi"
students.push('Sade');
students.unshift('Blessing');

console.log(students); // ["Blessing", "Ada", "Chika", "Sade"]

let colors = ['red', 'green', 'blue', 'yellow'];
let sliced = colors.slice(1, 3); // ["green", "blue"]
colors.splice(2, 1, 'orange'); // replace "blue"
console.log(sliced, colors);

const filter = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 4) {
      str += ',' + arr[i];
    }
  }
  return str;
};
