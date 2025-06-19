function outer() {
  let msg = 'outer';
  function inner() {
    console.log(msg); // "outer"
  }
  inner();
}
outer();
