"usestrict"
addEventListener("load", function () {
  let arr = [45, 32, 542, 532, 76, 954, 5343, 357, 22, 77, 99]
  let result = []
  for (const element of arr) {
    if (element > 100) result.push(element)
  }
  document
    .querySelector(".answer")
    .insertAdjacentHTML("beforeend", `[${result}]`)
})
