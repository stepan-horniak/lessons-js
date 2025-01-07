"usestrict"
addEventListener("load", function () {
  let arr = [10, 4, 6, 15, 54, 67, 5, 33]

  arr.forEach((el, index, arr) => (el > arr[0] ? (arr[index] = el * 2) : null))

  document.querySelector(".answer").insertAdjacentHTML(
    "beforeend",
    `<p>масив елементів arr = [10, 4, 6, 15, 54, 67, 5, 33]</p>
    <p>елементи помножені на 2 і більші від першого елемента:  ${arr}</p>`
  )
})
