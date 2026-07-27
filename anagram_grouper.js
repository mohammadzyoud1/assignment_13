const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function groupAnagrams(arr) {
  let map = {};
  for (let word of arr) {
    let num = new Array(26).fill(0);
    for (let char of word) {
      num[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    let key = num.join("#");

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(word);
  }

  return Object.values(map);
}

rl.question("Enter the words ", function (words) {
  let arr = words.split(" ");
  console.log((words = groupAnagrams(arr)));
  rl.close();
});
