"usestrict"
addEventListener("load", function () {
  const prices = [200, 456, 1000, 423, 5343, 56]

  let taxFromPrices = prices.map(function (elem) {
    return elem * 0.2
  })

  document
    .querySelector(".answer")
    .insertAdjacentHTML(
      "beforeend",
      `масив цін : ${prices} <p>результат : ${taxFromPrices}</p>`
    )
})
