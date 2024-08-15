"usestrict"
addEventListener("load", function () {
  const answer = document.querySelector(".answer-1")
  let result = ""
  for (let i = 1; i <= 8; i++) {
    result += `<button>${i} кнопка "Hello"</button> <br>`
  }
  answer.insertAdjacentHTML("beforeend", result)
})
