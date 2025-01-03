"use strict"
const element = document.querySelector(".answer")
let numberSizeTriangle = parseInt(prompt("Введіть величину трикутника", "7"))

let result = ""

for (let i = 0; i < numberSizeTriangle; i++) {
  for (let j = 0; j < 2 * numberSizeTriangle - 1; j++) {
    if (j >= numberSizeTriangle - 1 - i && j <= numberSizeTriangle - 1 + i) {
      result += "o"
    } else {
      result += "&nbsp"
    }
  }
  result += "<br>"
}
element.innerHTML = result
