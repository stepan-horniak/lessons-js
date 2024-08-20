"usestrict"
addEventListener("load", function () {
  function findAverageValueTemp(...num) {
    let averageValue = []
    let countCverageValue = 0
    let result = 0
    for (const element of num) {
      if (element > 0) {
        averageValue.push(element)
        result += element
        countCverageValue++
      }
    }

    return result / countCverageValue
  }

  document
    .querySelector(".answer")
    .insertAdjacentHTML(
      "beforeend",
      `findAverageValueTemp(-2, -2, -5, 0, 4, 6, 2) <p> середнє значення додатних показів температури  : ${findAverageValueTemp(
        -2,
        -2,
        -5,
        0,
        4,
        6,
        2
      )}</p>`
    )
})
