"usestrict"
addEventListener("load", function () {
  const numbers = []

  function getRandomNum(min = 1, max = 100) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  function getArrayRandomNumbers(numberUser) {
    for (let i = 0; i < numberUser; i++) {
      numbers.push(getRandomNum())
    }
  }

  getArrayRandomNumbers(10)

  function getNumDivide3(array) {
    let count = 0
    let numbers = []
    for (const element of array) {
      if (element % 3 === 0 && element % 7 !== 0) {
        count++
        numbers.push(element)
      }
    }
    return { count, numbers }
  }
  let result = getNumDivide3(numbers)

  document
    .querySelector(".answer")
    .insertAdjacentHTML(
      "beforeend",
      `масив чисел : ${numbers} <br> кількість : ${result.count} які цифри : ${result.numbers}`
    )
})
