"usestrict"
addEventListener("load", function () {
  let arr = new Array(20).fill(0)
  arr.forEach((el, index, ar) => {
    index % 2 !== 0 ? (ar[index] = 1) : null
  })
  document.querySelector(".answer").insertAdjacentHTML("beforeend", `${arr}`)
})
