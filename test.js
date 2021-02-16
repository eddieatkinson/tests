console.log("Hey!");

const first = "hello";
const second = document.querySelector("#thing");
const url = "https://www.hello.com";

const globalObject = {
  first: "hello",
  second: document.querySelector("#thing"),
  url: "https://www.hello.com",
};

const arr = [
  { name: "Eddie" },
  { name: "John" },
  { name: "Erica" },
  { name: "Patty" },
];

const increaseCounter = (() => {
  console.log("INVOKED!!");
  let counter = 0;
  return () => {
    counter++;
    return counter;
    // console.log(counter);
  };
})();

// const inputText = document.querySelector("#inputText");
// inputText.addEventListener("change", (event) => {
//   console.log(event.target.value);
// });

// const grayDiv = document.querySelector(".gray");
// grayDiv.addEventListener("click", (event) => {
//   console.log("CLICKED!!");
//   console.log(increaseCounter());
// });

// function myFunction(num) {
//   console.log(num);
// }

// const myArrowFunction = (num) => {
//   console.log(num);
// };

// const myArray = [1, 2, 3, 4, 5];

// myArray.forEach(myArrowFunction);
// const phrase = "hey there!";
// const leetObject = { A: 4, E: 3, G: 6, I: 1, O: 0, T: 7 };

// let phraseArray = phrase.toUpperCase().split("");
// for (let i = 0; i < phraseArray.length; i++) {
//   phraseArray[i] = leetObject[phraseArray[i]] || phraseArray[i];
// }
// console.log(phraseArray.join(""));
// var myService = {
//   good: 0.2,
//   fair: 0.15,
//   poor: 0.1,
// };
// const tipAmount = (bill, serviceLevel) =>
//   bill * (myService[serviceLevel] || 0.2);

// console.log(tipAmount(30, "far"));

// if (false) console.log("HEY");
// fetch(
//   "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=30189",
//   {
//     headers: {
//       Authorization:
//         "Bearer jdlNpI-9Aj4w0CY7xhwFO_UNBB80yj9PdzwWT5ESj107J7N4KukW2l6lYkWdZ3iQ6aPljWvM0PxNY3ceo2ynOOxgqFYzRqOlmQvmBRAd5zzMJFi1q6fShW75KPsCYHYx",
//     },
//   }
// )
//   .then((response) => console.log(response))
//   .catch((e) => console.log("ERROR", e));

const arms = document.getElementById("arms");
const shoulders = document.getElementById("shoulders");
const chest = document.getElementById("chest");
const abs = document.getElementById("abs");
const legs = document.getElementById("legs");

// const legs = document.getElementById("legs");
// const _legs = document.getElementById("_legs");
// const abs = document.getElementById("abs");
// const chest = document.getElementById("chest");
// const shoulders = document.getElementById("shoulders");
// const arms1 = document.getElementById("arms-area1");
// const arms2 = document.getElementById("arms-area2");

const arms_ = document.querySelector(".grid-arms");
const arms_2 = document.querySelector(".grid-arms2");
const shoulders_ = document.querySelector(".grid-shoulders");
const chest_ = document.querySelector(".grid-chest");
const abs_ = document.querySelector(".grid-abs");
const legs_ = document.querySelector(".grid-legs");

const mouseOver = (element) => {
  console.log("MOUSING OVER");
  element.style.visibility = "visible";
};
const mouseOut = (element) => {
  console.log("MOUSING OUT");
  element.style.visibility = "hidden";
};

// legs_.onmouseover = () => {
//   mouseOver(legs);
// };
// legs_.onmouseout = () => {
//   mouseOut(legs);
// };
arms_.onmouseover = () => {
  mouseOver(arms);
};
arms_.onmouseout = () => {
  mouseOut(arms);
};
arms_2.onmouseover = () => {
  mouseOver(arms);
};
arms_2.onmouseout = () => {
  mouseOut(arms);
};
shoulders_.onmouseover = () => {
  mouseOver(shoulders);
};
shoulders_.onmouseout = () => {
  mouseOut(shoulders);
};
chest_.onmouseover = () => {
  mouseOver(chest);
};
chest_.onmouseout = () => {
  mouseOut(chest);
};
abs_.onmouseover = () => {
  mouseOver(abs);
};
abs_.onmouseout = () => {
  mouseOut(abs);
};
legs_.onmouseover = () => {
  mouseOver(legs);
};
legs_.onmouseout = () => {
  mouseOut(legs);
};

// document.querySelector(".grid-upper").addEventListener("mouseenter", () => {
//   console.log("HOVERING");
//   arms.classList.add("visible");
// });
// document.querySelector(".grid-upper").removeEventListener(, () => {
//   console.log("HOVERING");
//   arms.classList.add("visible");
// });
