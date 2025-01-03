"usestrict"
addEventListener("load", function () {
  if (confirm("запускаємо код")) {
    function getEvenNumbers(a, b, c) {
      if (a % 2 === 0) evenNumberCount++
      if (b % 2 === 0) evenNumberCount++
      if (c % 2 === 0) evenNumberCount++
      return evenNumberCount
    }

    function getPositiveNumber(a, b, c) {
      a > 0 ? positiveNumberCount++ : null
      b > 0 ? positiveNumberCount++ : null
      c > 0 ? positiveNumberCount++ : null
      return positiveNumberCount
    }

    function getGreaterThan100(a, b, c) {
      a > 100 ? greaterThan100Count++ : null
      b > 100 ? greaterThan100Count++ : null
      c > 100 ? greaterThan100Count++ : null
      return greaterThan100Count
    }
    let firstNumber = parseFloat(prompt("введіть перше число", "5"))
    let SecondNumber = parseFloat(prompt("введіть друге число", "5"))
    let thirtNumber = parseFloat(prompt("введіть третє число", "5"))

    let greaterThan100Count = 0
    let positiveNumberCount = 0
    let evenNumberCount = 0

    getEvenNumbers(firstNumber, SecondNumber, thirtNumber)
    getPositiveNumber(firstNumber, SecondNumber, thirtNumber)
    getGreaterThan100(firstNumber, SecondNumber, thirtNumber)
    document
      .querySelector(".answer")
      .insertAdjacentHTML(
        "beforeend",
        `<p>парних чисел: ${evenNumberCount}</p><p>додатніх чисел: ${positiveNumberCount}</p><p>більших за 100: ${greaterThan100Count}</p>`
      )
  }
})
