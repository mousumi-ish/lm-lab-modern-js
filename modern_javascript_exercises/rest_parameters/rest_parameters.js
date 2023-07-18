// Instructions can be found in rest_parameters.md

//function add(a, b) {
// Add a loop here
//return a + b;
export function add(...numbers) {
  let sum = 0;
  for (let n of numbers) sum += n;
  return sum;
}

console.log(add(1, 2));
console.log(add(1, 2, 3, 4, 5));
//module.exports = add;
