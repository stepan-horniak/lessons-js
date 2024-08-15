"usestrict"
addEventListener("load", function () {
  const answer = document.querySelector(".answer")
  let count = 0
  let userNumber = 0
  do {
    userNumber = parseInt(
      prompt(
        `вводіть числа пока сума не буде бідьша за 20 сума введених чисел = ${count}`,
        ""
      )
    )
    count += userNumber
  } while (count < 21)

  answer.insertAdjacentHTML("beforeend", count)
})
