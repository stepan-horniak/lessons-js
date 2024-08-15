"usestrict"
addEventListener("load", function () {
  const answer = document.querySelector(".answer")
  let randomNumber = 1 + Math.floor(Math.random() * (10 - 1) + 1)
  let count = 0
  while (true) {
    let userNumber = parseInt(
      prompt("вгадайте число яке загадав компютер від 1 до 10", "")
    )
    count++
    if (randomNumber === userNumber) break
  }

  answer.insertAdjacentHTML("beforeend", `ви вгадали число за ${count} спробою`)
})
