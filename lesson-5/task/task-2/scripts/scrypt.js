"usestrict"
addEventListener("load", function () {
  const answer = document.querySelector(".answer")
  let result = ""
  for (let i = 1; i <= 10; i++) {
    result += `product # ${i} <input type="number"> <br>`
  }
  answer.insertAdjacentHTML("beforeend", result)
})
