"usestrict"
addEventListener("load", function () {
  if (confirm("запускаємо код")) {
    function randomNumber(min = -500, max = 500) {
      return min + Math.floor(Math.random() * (max - min) + 1)
    }
    function prizeList(params) {
      let prizeList = []
      for (let i = 0; i < 20; i++) {
        prizeList.push(randomNumber())
      }

      return prizeList
    }
    const prize = prizeList()
    let countPrize = 0
    alert("гра введіть число від 1 до 20 а я підрахую ваш виграш")
    do {
      let userNumber = parseInt(prompt("введіть число від 1 до 20", "10"))
      alert(`ваш виграш : ${prize[userNumber - 1]}`)
      countPrize += prize[userNumber - 1]
      console.log(userNumber)
      if (userNumber === null) break
    } while (confirm("ще спробуєте"))

    document
      .querySelector(".answer")
      .insertAdjacentHTML("beforeend", `сума вашого виграшу ${countPrize}`)
  }
})
