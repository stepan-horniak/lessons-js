"usestrict"
addEventListener("load", function () {
  function getRandomNum(min = 1, max = 100) {
    return min + Math.floor(Math.random() * (max - min) + 1)
  }
  function getArrayRandomNumbers(number, array) {
    for (let i = 0; i < number; i++) {
      array.push(getRandomNum())
    }
  }
  const numbers = []
  getArrayRandomNumbers(10, numbers)
  function getNumDivide3(array) {
    let count = 0
    for (const element of array) {
      if (element % 3 === 0 && element % 7 !== 0) {
        count++
      }
    }
    return count
  }

  document.querySelector(".answer").insertAdjacentHTML("beforeend", ``)
})
