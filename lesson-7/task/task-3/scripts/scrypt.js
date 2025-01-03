"usestrict"
addEventListener("load", function () {
  function getSum(a, b, c, d) {
    return a + b + c + d
  }

  function getMult(a, b, c, d) {
    return a * b * c * d
  }

  function getAverage(a, b, c, d) {
    return (a + b + c + d) / 4
  }

  function getMin(a, b, c, d) {
    return Math.min(a, b, c, d)
  }

  let a = parseFloat(prompt(`Введіть перше число:`))
  let b = parseFloat(prompt(`Введіть друге число:`))
  let c = parseFloat(prompt(`Введіть третє число:`))
  let d = parseFloat(prompt(`Введіть четверте число:`))

  let sum = getSum(a, b, c, d)
  let mult = getMult(a, b, c, d)
  let average = getAverage(a, b, c, d)
  let min = getMin(a, b, c, d)

  document
    .querySelector(".answer")
    .insertAdjacentHTML(
      "beforeend",
      `<p>ви ввели ${a},${b},${c},${d}</p><p>Сума чисел: ${sum}</p><p>Добуток чисел: ${mult}</p><p>Середнє арифметичне: ${average}</p><p>Мінімальне значення: ${min}</p>`
    )
})
