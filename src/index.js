"use strict"
module.exports = function check(str, bracketsConfig) {
  let openBrackets = '';
  let closeBrackets = '';
  bracketsConfig.map(x => {
    openBrackets += x[0];
    closeBrackets += x[1];
  });
  let brackets = [];
  let openFind = 0;
  let closeFind = 0;

  for (const i of str.split('')) {
    openFind = openBrackets.indexOf(i);
    closeFind = closeBrackets.indexOf(i);
    if (closeFind >= 0) {
      if (openFind >= 0) {
        if (brackets.at(-1) === closeFind) {
          brackets.pop();
        } else {
          brackets.push(openFind);
        }
      } else if (brackets.pop() !== closeFind) {
        return false;
      }
    } else {
      brackets.push(openFind);
    }
  }
  if (brackets.length) {
    return false
  }
  return true
}