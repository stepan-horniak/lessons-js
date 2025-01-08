"usestrict"
addEventListener("load", function () {
  let arr = Array.from({ length: 10 }, (el, index) => index * 2 + 1)

  document.querySelector(".answer").insertAdjacentHTML("beforeend", `${arr}`)
})
