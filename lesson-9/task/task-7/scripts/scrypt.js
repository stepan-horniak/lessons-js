"usestrict"
addEventListener("load", function () {
  const prices = [350, 1340, 4730, 450, 1001]
  prices.forEach((el, index, arr) =>
    el > 1000 ? (arr[index] = el - el * 0.3) : null
  )
  document
    .querySelector(".answer")
    .insertAdjacentHTML(
      "beforeend",
      `<p>масив цін [350, 1340, 4730, 450, 1001]</p> <p>результат : ${prices}</p>`
    )
})
