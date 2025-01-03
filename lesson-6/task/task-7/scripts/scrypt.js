"use strict"

const element = document.querySelector(".answer")

let result = ""

for (let i = 1; i <= 6; i++) {
  result += `${i} `

  for (let j = 1; j <= i * i; j++) {
    result += `${j}`
  }
  result += "<br>"
}

element.innerHTML = result
