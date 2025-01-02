"usestrict"
addEventListener("load", function () {
  const answer = document.querySelector(".answer")

  let min = 1
  let max = 3
  let answerText = ""
  for (let i = 0; i < max; i++) {
    answerText += "<table><tbody>"
    for (let f = 1; f <= max; f++) {
      answerText += `<th>${f}`
      answerText += "</th>"
    }
    answerText += "</table></tbody>"
  }
  answer.insertAdjacentHTML("beforeend", answerText)
  let randomNumRow = min + Math.floor(Math.random() * (max - min + 1))
  let randomNumColumn = min + Math.floor(Math.random() * (max - min + 1))

  alert("гра морський бій")

  for (let user = 4; user > 0; user--) {
    let userNumberRow = parseInt(
      prompt(
        `введіть номер рядка на якій позиції розташований корабель від ${min} до ${max} залишилось ${user} спроб`,
        "3"
      )
    )
    let userNumberColum = parseInt(
      prompt(
        `введіть номер колонки на якій позиції розташований корабель від ${min} до ${max} залишилось ${user} спроб`,
        "3"
      )
    )
    if (randomNumColumn === userNumberColum && randomNumRow === userNumberRow) {
      answer.insertAdjacentHTML("beforeend", "ви вгадали")
      break
    } else if (isNaN(userNumberRow) || isNaN(userNumberColum)) break
    else
      confirm(
        `пробуйте ще позиція рядка ${randomNumRow} col ${randomNumColumn}`
      )
  }
})
