"usestrict"
addEventListener("load", function () {
  function calkNegativeIndicatorsTemp(...num) {
    let countNegativeIndicators = 0
    for (const element of num) {
      if (element < 0) countNegativeIndicators++
    }
    return countNegativeIndicators
  }

  document
    .querySelector(".answer")
    .insertAdjacentHTML(
      "beforeend",
      `calkNegativeIndicators(-2, -2, -5, 0, 4, 6, 2) <p> відємних показників з таких чисел : ${calkNegativeIndicatorsTemp(
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
