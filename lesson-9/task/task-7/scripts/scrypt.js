"usestrict"
addEventListener("load", function () {
  const prices = [350, 1340, 4730, 450, 1001]
  let result = prices.map((element) => {
    if (element > 1000) return element - element * 0.3
    else return element
  })
  document
    .querySelector(".answer")
    .insertAdjacentHTML(
      "beforeend",
      `<p>масив цін ${prices}</p> <p>результат : ${result}</p>`
    )
})
