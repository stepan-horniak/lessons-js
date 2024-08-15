"usestrict"
addEventListener("load", function () {
  const answer = document.querySelector(".answer-1")
  let result = ""
  for (let month = 3; month <= 8; month++) {
    if (month < 6) result += `<p>Номер місяця весни: ${month}</p>`
    else result += `<p>Номер місяця літа: ${month}</p>`
  }
  answer.insertAdjacentHTML("beforeend", result)
})
