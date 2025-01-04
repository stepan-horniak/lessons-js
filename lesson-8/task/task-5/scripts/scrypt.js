"usestrict"
addEventListener("load", function () {
  if (confirm("запускаємо код")) {
    function getRandomNumber(min = -500, max = 500) {
      return min + Math.floor(Math.random() * (max - min) + 1)
    }
    function getPrizeList() {
      let prizeList = []
      for (let i = 0; i < 20; i++) {
        prizeList.push(getRandomNumber())
      }

      return prizeList
    }
    const prize = getPrizeList()
    let countPrize = 0
    alert("гра введіть число від 1 до 20 а я підрахую ваш виграш")
    do {
      let userNumber = parseInt(prompt("введіть число від 1 до 20", "10"))
      if (isNaN(userNumber)) break
      alert(`ваш виграш : ${prize[userNumber - 1]}`)
      countPrize += prize[userNumber - 1]
    } while (confirm("ще спробуєте"))

    document
      .querySelector(".answer")
      .insertAdjacentHTML("beforeend", `сума вашого виграшу ${countPrize}`)
  }
})
