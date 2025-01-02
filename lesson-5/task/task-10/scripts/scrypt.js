"usestrict"
addEventListener("load", function () {
  const answer = document.querySelector(".answer")

  const startNumber = parseInt(prompt("задайте початкове число", ""))
  const endNumber = parseInt(prompt("задайте кінцеве число", ""))
  let summOddNumbers = 0

  for (let i = startNumber; i <= endNumber; i++) {
    if (i % 2 === 1) summOddNumbers += i
  }
  answer.insertAdjacentHTML("beforeend", summOddNumbers)
})
