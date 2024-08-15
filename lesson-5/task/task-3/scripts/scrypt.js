"usestrict"
addEventListener("load", function () {
  const answer = document.querySelector(".answer")
  const userNumber = parseInt(prompt("введіть кількість стовбців", "10"))
  let tableNumber = ""
  for (let i = 1; i <= userNumber; i++) {
    tableNumber += `<th>${i}</th>`
  }
  let result = `<table><thead><tr>${tableNumber}</tr></thead></table>`
  answer.insertAdjacentHTML("beforeend", result)
})
