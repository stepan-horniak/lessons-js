"usestrict"
addEventListener("load", function () {
  const answer = document.querySelector(".answer")
  let min = 0
  let max = 3
  let answerText = ""
  let score = 1
  for (let i = 0; i < max; i++) {
    answerText += "<table><tbody>"
    for (let f = 1; f <= max; f++) {
      answerText += `<th>${score}`
      answerText += "</th>"
      score++
    }
    answerText += "</table></tbody>"
  }
  let random = min + Math.floor(Math.random() * (score - min) + 1)
  answer.insertAdjacentHTML("beforeend", answerText)
  alert("гра морський бій")

  for (let user = 0; user < 4; user++) {
    let userNumber = parseInt(
      prompt(
        "введіть номер на якій позиції розташований корабель від 1 до 9 у  вас є 4 спроби",
        "3"
      )
    )
    if (userNumber === random) {
      answer.insertAdjacentHTML("beforeend", "ви вгадали")
      break
    } else if (isNaN(userNumber)) break
  }
  answer.insertAdjacentHTML("beforeend", "ви не вгадали")
})
