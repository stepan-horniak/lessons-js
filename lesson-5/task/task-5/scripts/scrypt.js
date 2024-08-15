"usestrict"
addEventListener("load", function () {
  const answer = document.querySelector(".answer")
  const rowNumber = 3
  const colNumber = 3
  let cellNumber = 1
  let result = ""

  for (let i = 1; i <= rowNumber; i++) {
    result += `<tr>`
    for (let j = 1; j <= colNumber; j++) {
      result += `<td>${cellNumber}</td>`
      cellNumber++
    }
    result += `</tr>`
  }

  answer.insertAdjacentHTML(
    "beforeend",
    `<table><tbody>${result}
  </tbody></table>`
  )
})
