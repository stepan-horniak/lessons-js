"usestrict"
addEventListener("load", function () {
  if (confirm("запускаємо код")) {
    let a = parseFloat(prompt("введіть перше число", "5"))
    let b = parseFloat(prompt("введіть друге число", "5"))
    let c = parseFloat(prompt("введіть третє число", "5"))
    function getEvenNumbers(a, b, c) {
      if (a % 2 === 0) evenNumberCount++
      if (b % 2 === 0) evenNumberCount++
      if (c % 2 === 0) evenNumberCount++
    }

    function getPositiveNumber(a, b, c) {
      a > 0 ? positiveNumberCount++ : null
      b > 0 ? positiveNumberCount++ : null
      c > 0 ? positiveNumberCount++ : null
    }

    function getGreaterThan100(a, b, c) {
      a > 100 ? greaterThan100Count++ : null
      b > 100 ? greaterThan100Count++ : null
      c > 100 ? greaterThan100Count++ : null
    }
    let greaterThan100Count = 0
    let positiveNumberCount = 0
    let evenNumberCount = 0
    getEvenNumbers(a, b, c)
    getPositiveNumber(a, b, c)
    getGreaterThan100(a, b, c)
    const answer = document
      .querySelector(".answer")
      .insertAdjacentHTML(
        "beforeend",
        `<p>парних чисел: ${evenNumberCount}</p><p>додатніх чисел: ${positiveNumberCount}</p><p>більших за 100: ${greaterThan100Count}</p>`
      )
  }
})
