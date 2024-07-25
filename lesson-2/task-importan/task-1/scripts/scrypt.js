"usestrict"
addEventListener("load", () => {
  const firstNum = parseInt(prompt("введіть перше число", "5"))
  const secondNum = parseInt(prompt("введіть друге число", "5"))

  const multiplication = document.querySelector(".multiplication")
  const addition = document.querySelector(".addition")
  const division = document.querySelector(".division")

  const multiplicationSum = firstNum * secondNum
  multiplication.innerHTML = multiplicationSum

  const additionSum = firstNum + secondNum
  addition.innerHTML = additionSum

  const divisionSum = firstNum / secondNum
  division.innerHTML = divisionSum
})
