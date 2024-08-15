"usestrict"
addEventListener("load", function () {
  const userNumber = parseInt(
    prompt(
      "загадайте число від 1 до 1000 а компютер за допомогою бінарного пошуку вгадає його",
      "400"
    )
  )
  let numberAnswer = 500
  let numberMax = 1000
  let numberMin = 1

  for (let searchNumber = 1; searchNumber <= 10; searchNumber++) {
    let questionForUser = confirm(
      `Чи це число ${numberAnswer}? Якщо більше, натисніть 'OK', якщо менше, натисніть 'Скасувати'.`
    )

    if (userNumber === numberAnswer) {
      alert(`Я вгадав число за ${searchNumber} спробу!`)
      break
    } else if (questionForUser === true) {
      numberMin = numberAnswer + 1
    } else {
      numberMax = numberAnswer - 1
    }

    numberAnswer = Math.floor((numberMax + numberMin) / 2)
  }
})
