"use strict"
addEventListener("load", function () {
  const answer = document.querySelector(".answer")
  let userMoney = parseFloat(
    prompt("Введіть скільки грошей ви хочете вкласти", "1000")
  )

  const percent = 0.2
  const generalTax = 0.05
  let result = userMoney
  let profit
  let tax

  for (let i = 0; i < 20; i++) {
    profit = result * percent
    tax = profit * generalTax
    result += profit - tax
  }

  answer.insertAdjacentHTML(
    "beforeend",
    `Сума, яку ви одержите через 20 років: ${result.toFixed(2)} тис. грн`
  )
})
