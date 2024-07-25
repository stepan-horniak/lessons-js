"usestrict"
addEventListener("load", () => {
  const randomMonth = Math.floor(Math.random() * 12) + 1

  const randomDay = Math.floor(Math.random() * 7)

  const sum = randomMonth + randomDay

  const answer = document.querySelector(".answer")
  answer.innerHTML = `
  випадковий номер місяця ${randomMonth},  випадковий номер дня ${randomDay} їх сума = ${sum}
  `
})
