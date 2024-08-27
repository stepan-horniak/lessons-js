"usestrict"
addEventListener("load", function () {
  let arr = [10, 4, 6, 15, 54, 67, 5, 33]
  let result = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[0] < arr[i]) result.push(arr[i] * 2)
  }

  document.querySelector(".answer").insertAdjacentHTML(
    "beforeend",
    `<p>масив елементів arr = [10, 4, 6, 15, 54, 67, 5, 33]</p>
    <p>елементи помножені на 2 і більші від першого елемента:  ${result}</p>`
  )
})
