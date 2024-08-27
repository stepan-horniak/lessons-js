"usestrict"
addEventListener("load", function () {
  let arr = [10, 0, -5, -10, 3, 1, 5]
  let positiveNumbers = []
  let result = 1
  for (const element of arr) {
    if (element > 0) positiveNumbers.push(element)
  }
  for (const element of positiveNumbers) {
    result *= element
  }
  console.log(result)

  document.querySelector(".answer").insertAdjacentHTML(
    "beforeend",
    `<p>масив arr = [10, 0, -5, -10, 3, 1, 5]</p>
      <p>додатні числа ${positiveNumbers}</p>
      <p> результат ${result}</p>`
  )
})
