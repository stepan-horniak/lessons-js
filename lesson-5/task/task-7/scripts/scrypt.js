"usestrict"
addEventListener("load", function () {
  const answer = document.querySelector(".answer")
  const userNumber = parseInt(prompt("введіть кількість абзаців", "4"))

  let result = ""
  for (let paragraph = 1; paragraph <= userNumber; paragraph++) {
    result += `<h1>заголовок ${paragraph}</h1>`

    for (let i = 1; i <= paragraph; i++) {
      result += `<p>розділ ${paragraph}, параграф ${i}</p>`
    }
  }
  answer.insertAdjacentHTML("beforeend", result)
})
