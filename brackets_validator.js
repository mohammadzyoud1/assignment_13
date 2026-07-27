const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isValid(brack) {
  let stack = [];

  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < brack.length; i++) {
    let ch = brack[i];

    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else if (ch === ")" || ch === "]" || ch === "}") {
      if (stack.length === 0 || stack[stack.length - 1] !== pairs[ch]) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.length === 0;
}

rl.question("Enter the brackets: ", function (brack) {
  if (isValid(brack)) {
    console.log("Balanced");
  } else {
    console.log("Not Balanced");
  }

  rl.close();
});
