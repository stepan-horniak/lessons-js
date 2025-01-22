"use strict"

function calc(action) {
  const firstNumber = parseFloat(document.getElementById("first-number").value)
  const secondNumber = parseFloat(
    document.getElementById("second-number").value
  )
  let showElement = document.getElementById("result")
  let result
  switch (action) {
    case "add":
      result = firstNumber + secondNumber
      break
    case "minus":
      result = firstNumber - secondNumber
      break
    case "multiply":
      result = firstNumber * secondNumber
      break
    case "divide":
      if (secondNumber === 0) {
        showElement.value = "на 0 ділити неможна"
        return
      }
      result = firstNumber / secondNumber
      break
  }

  showElement.value = result

  return showElement
}

window.onload = function () {
  document.getElementById("add").onclick = () => calc("add")
  document.getElementById("minus").onclick = () => calc("minus")
  document.getElementById("multiply").onclick = () => calc("multiply")
  document.getElementById("divide").onclick = () => calc("divide")
}
