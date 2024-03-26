import createHashMap from "./HashMap.js";

const hashMap = createHashMap(4);

// generate a number of string with random letters
for (let i = 0; i < 50; i++) {
  let newKey = "";
  for (let j = 0; j < 3; j++) {
    const char = 97 + 26 * Math.random();
    const newChar = String.fromCharCode(char);
    newKey += newChar;
  }
  console.log(newKey);
  hashMap.set(newKey, 100 * Math.random());
}

// Tests for updating of nodes within linked list in hashMap
// hashMap.set("yds", 21);
// hashMap.set("ikj", 22);
// hashMap.set("yds", 23);
// hashMap.set("yds", 21);
// hashMap.set("aaa", 21);
// hashMap.set("aaa", 21);

// Tests for resizing behaviour, and get value
// hashMap.set("eee", 1);
// hashMap.set("fff", 2);
// hashMap.set("ccc", 3);
// hashMap.set("ccd", 4);
// hashMap.set("dfg", 5);
// hashMap.set("aaa", 21);
// hashMap.set("bbb", 21);
// hashMap.set("cce", 21);
// hashMap.set("iop", 21);
// hashMap.set("jis", 21);

// console.log(`Value for key "eee" is ${hashMap.get("eee")}`);
// console.log(`Value for key "iop" is ${hashMap.get("iop")}`);
// console.log(`Value for key "abc" is ${hashMap.get("abc")}`);
// console.log(`key "eee" in hashmap? ${hashMap.has("eee")}`);
// console.log(`Value "iop" in hashmap? ${hashMap.has("iop")}`);
// console.log(`Value "abc" in hashmap? ${hashMap.has("abc")}`);

console.table(hashMap.entries());

// hashMap.clear();

// console.table(hashMap.entries());
