"usestrict"
addEventListener("load", function () {
  const answer = document.querySelector(".answer")
  let rowNumber = 3
  let columnsNumber = 7
  let result = ""
  for (let i = 1; i <= rowNumber; i++) {
    result += `<tr>`
    for (let j = 1; j <= columnsNumber; j++) {
      result += `<td>${j}</td>`
    }
    result += `</tr>`
  }

  answer.insertAdjacentHTML(
    "beforeend",
    `<table><tbody>${result}
  </tbody></table>`
  )
})
