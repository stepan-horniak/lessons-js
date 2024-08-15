"usestrict"
addEventListener("load", function () {
  const answer = document.querySelector(".answer")
  const rowNumber = 3
  const colNumber = 3
  const tableNumber = 3
  let cellNumber = 1
  let result = ""

  for (let t = 1; t <= tableNumber; t++) {
    result += `<table><tbody>`
    for (let i = 1; i <= rowNumber; i++) {
      result += `<tr>`
      for (let j = 1; j <= colNumber; j++) {
        result += `<td>${cellNumber}</td>`
        cellNumber++
      }
      result += `</tr>`
    }
    result += `</tbody></table>`
  }
  answer.insertAdjacentHTML("beforeend", result)
})
