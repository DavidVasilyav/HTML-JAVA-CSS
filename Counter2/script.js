document.getElementById("title").innerHTML = "Ran";
const underTitle = document.getElementById("under-title");

function sayImIn() {
  console.log("I'm in");
}

function sayImOut() {
  console.log("I'm out");
}

document.getElementById("title").addEventListener("mouseenter", sayImIn);
document.getElementById("title").addEventListener("mouseleave", sayImOut);

let counter = 1;

function changeUnderTitleValue() {
  document.getElementById("under-title").innerHTML = `Got click ${counter}`;
  counter = counter + 1;
}

document
  .getElementById("under-title")
  .addEventListener("click", changeUnderTitleValue);
