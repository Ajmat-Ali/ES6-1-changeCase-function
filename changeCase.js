// console.log("changeCase.js");
const input = ["MA", "SA", "I", "SCH", "OOL"];

let converChar = (char) => {
  return char.toLowerCase();
};

let result = [];
let convertLowerCase = (ary) => {
  for (let i = 0; i < ary.length; i++) {
    let bag = "";
    let data = ary[i];
    for (let j = 0; j < data.length; j++) {
      let char = input[i][j];
      bag += converChar(char);
    }
    result.push(bag);
  }
};
convertLowerCase(input);
console.log(result);
