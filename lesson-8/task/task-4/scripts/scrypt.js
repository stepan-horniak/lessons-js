"usestrict"
addEventListener("load", function () {
  let paymentsDuringYear = [18, 12, 14, 34, 65, 74, 36, 24, 74, 23, 43, 21]
  function getSum(arrayPaymants, monthMin = 1, monthMax = 12, monthEven = 1) {
    let paiments = arrayPaymants
    let sumPaiments = 0
    for (let i = 0; i < paiments.length; i = i + monthEven) {
      if (i >= monthMin - 1 && i <= monthMax - 1) {
        sumPaiments += paiments[i]
      }
    }
    return sumPaiments
  }

  document.querySelector(".answer").insertAdjacentHTML(
    "beforeend",
    `
        <p>рандомні числа : ${paymentsDuringYear}</p>

    <p>за весь рік : ${getSum(paymentsDuringYear, 1, 12)}</p>
    <p> у першій половині року : ${getSum(paymentsDuringYear, 1, 6)}</p>
    <p>у другій половині року : ${getSum(paymentsDuringYear, 7, 12)}</p>
    <p>за літо : ${getSum(paymentsDuringYear, 6, 8)}</p>
    <p>за ІІ квартал : ${getSum(paymentsDuringYear, 4, 6)} </p>
    <p>за парні місяці (з парними номерами) : ${getSum(
      paymentsDuringYear,
      1,
      12,
      2
    )}</p>
    <p>за місяці, які є початковими у сезоні (весна, літо, осінь, зима) : ${getSum(
      paymentsDuringYear,
      1,
      12,
      3
    )}</p>
    `
  )
})
