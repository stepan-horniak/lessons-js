"usestrict"
addEventListener("load", function () {
  const answer = document.querySelector(".answer")

  let sum = 0
  for (let g = 0; g < 3; g++) {
    randomNumber = Math.floor(Math.random() * 4) + 1
    answer.insertAdjacentHTML(
      "beforeend",
      `<img src="../../${randomNumber}.jpg" alt=""></img>`
    )
    sum += Math.pow(10, randomNumber)
  }
  let prize
  switch (sum) {
    case 30:
      prize = 100
      break
    case 300:
      prize = 200
      break
    case 3000:
      prize = 500
      break
    case 30000:
      prize = 1000
      break
    default:
      prize = 0
      break
  }
  answer.insertAdjacentHTML("beforeend", `виграш = ${prize}`)
})
