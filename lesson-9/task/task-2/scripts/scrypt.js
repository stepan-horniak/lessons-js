"usestrict"
addEventListener("load", function () {
  let userNumberElement = parseInt(prompt("введіть кількість елементів", "5"))
  let array = new Array(userNumberElement).fill(1)
  let halfNamber = Math.floor(array.length / 2)
  array.fill(7, halfNamber)
  document
    .querySelector(".answer")
    .insertAdjacentHTML("beforeend", `[${array}]`)
})
