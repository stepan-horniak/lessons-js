"usestrict"
addEventListener("load", function () {
  const answer = document.querySelector(".answer")
  let summOddNumbers = 0
  for (let i = 0; i < Infinity; i++) {
    const userNumber = parseInt(
      prompt(
        "задайте числa а я знайду суму всіх непарних чисел, якщо досить нажміть скасувати",
        ""
      )
    )
    if (isNaN(userNumber)) break
    if (userNumber % 2 === 1) summOddNumbers += userNumber
  }
  answer.insertAdjacentHTML("beforeend", summOddNumbers)
})
