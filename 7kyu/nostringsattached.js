// You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

// You cannot use the following:

// "Hello, World!"
// 'Hello, World!'
// `Hello, World!`

// Good luck and try to be as creative as possible!

const helloWorld = () => {
  const letters = ['H','e','l','l','o',',',' ','W','o','r','l','d','!']
  return letters.reduce((ac,c) => ac + c, '')
 };

function helloWorld() {
  const letters = 'abcdefgHijklmnopqrstuvWxyz';
  const chars = [7, 4, 11, 11, 14, 26, 22, 14, 17, 11, 3];
  let result = '';

  chars.forEach((char) => {
    result += letters.charAt(char);
  });

  return `${result.slice(0, 5)}, ${result.slice(5)}!`;
}

