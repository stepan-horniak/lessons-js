"usestrict"
addEventListener("load", function () {
  const answer = document.querySelector(".answer-1")
  const userNumber = parseInt(
    prompt("введіть кількість випалкових чисел", "10")
  )
  let randomNumber = ""
  for (let list = 0; list < userNumber; list++) {
    randomNumber += `<li>${Math.floor(Math.random() * 100) + 1}</li>`
  }
  let result = `<ul>${randomNumber}</ul>`
  answer.insertAdjacentHTML("beforeend", result)
})
