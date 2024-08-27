"usestrict"
addEventListener("load", function () {
  let userNumberElement = parseInt(prompt("введіть кількість елементів", "5"))
  let array = new Array(userNumberElement)
  array.fill(0)
  document
    .querySelector(".answer")
    .insertAdjacentHTML("beforeend", `[${array}]`)
})
