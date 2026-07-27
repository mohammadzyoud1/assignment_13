const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function longestSubstring(s) {
  let set = new Set();

  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

rl.question("Enter the string ", function (str) {
  console.log(longestSubstring(str));
  rl.close();
});
