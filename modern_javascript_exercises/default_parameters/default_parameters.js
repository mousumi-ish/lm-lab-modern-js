// Instructions can be found in default_parameters.md

export const sayHello = (person) => {
  return `Hello, ${person === undefined ? "you!" : person + "!"}`;
  //console.log(`Hello,$ {person}!`);
};
