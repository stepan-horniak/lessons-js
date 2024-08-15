"usestrict"
addEventListener("load", function () {
  const answer = document.querySelector(".answer")
  let tempCount = 0
  for (let temperature = 1; temperature <= 12; temperature++) {
    tempCount += parseFloat(
      prompt(`введіть температуру за ${temperature} місяць`)
    )
  }
  let averageTemperature = tempCount / 12
  answer.insertAdjacentHTML(
    "beforeend",
    `середня температура за рік ${averageTemperature}`
  )
})
