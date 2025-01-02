"usestrict"
const answer = document.querySelector(".answer-1")
const userNumber = parseInt(prompt("введіть кількість випалкових чисел", "10"))
let result = `<ul>`
for (let list = 0; list < userNumber; list++) {
  result += `<li>${Math.floor(Math.random() * 100) + 1}</li>`
}
result += `</ul>`
answer.innerHTML = result
