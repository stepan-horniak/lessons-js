"usestrict"
addEventListener("load", function () {
  function getRandomValue() {
    return Math.random() < 0.5 ? 0 : 2
  }

  function generateArray(length) {
    const array = []
    let zerosAndTwosCount = 0
    let onesCount = 0

    for (let i = 0; i < length; i++) {
      if (zerosAndTwosCount === onesCount) {
        array.push(getRandomValue())
        zerosAndTwosCount++
      } else {
        array.push(1)
        onesCount++
      }
    }

    const IndexTwo = array.indexOf(2)
    const IndexOne = array.indexOf(1)

    if (IndexTwo > IndexOne) {
      ;[array[IndexTwo], array[IndexOne]] = [array[IndexOne], array[IndexTwo]]
    }

    return array
  }

  const length = 15
  const result = generateArray(length)
  console.log(result)
  document
    .querySelector(".answer")
    .insertAdjacentHTML("beforeend", `масив рандомних чисел : ${result}`)
})
