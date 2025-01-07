"usestrict"
addEventListener("load", function () {
  let arr = [10, 0, -5, -10, 3, 1, 5]

  let productPositiveElements = 1

  for (const element of arr) {
    element > 0 ? (productPositiveElements *= element) : null
  }

  document.querySelector(".answer").insertAdjacentHTML(
    "beforeend",
    `<p>масив arr = [10, 0, -5, -10, 3, 1, 5]</p>
      <p> результат ${productPositiveElements}</p>`
  )
})
