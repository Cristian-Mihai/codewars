// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


function toCamelCase(str) {
  let words = str.split('-').join('_').split('_');
  let result = words[0];

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    result += capitalized;
  }

  return result;
}