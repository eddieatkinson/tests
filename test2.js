// myOldFunction("OLD WAY!!");
// myNewFunction("NEW WAY!!");
// differentWay("DIFF");

// function myOldFunction(phrase) {
//   console.log(phrase);
// }

// (() => console.log("HEY"))();

const myArray = [
  { num: 1, name: "Eddie" },
  { num: 2, name: "Crystal" },
  { num: 1, name: "Ella" },
];
const matchingElement = myArray.find((element) => element.num === 1);
console.log(matchingElement);

//function (phrase) {
//   console.log(phrase);
// };
