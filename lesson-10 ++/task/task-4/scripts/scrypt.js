"usestrict"
addEventListener("load", function () {
  const numbers = [2, 6, 7, 9, 3, 4, 5, 2, 23, 23, 23, 2, 8, 7, 1, 2]

  let firstNum = numbers.indexOf(7)
  let lastNum = numbers.lastIndexOf(7)

  function getSumNumbers(first, last, ...arr) {
    let sum = 0
    for (let i = first + 1; i < last; i++) {
      sum += numbers[i]
    }
    return sum
  }
  console.log(getSumNumbers(firstNum, lastNum, numbers))

  document.querySelector(".answer").insertAdjacentHTML("beforeend", ``)
})
