"usestrict"
addEventListener("load", function () {
  // let arr = []
  // for (let i = 1; i < 40; i = i + 2) {
  //   arr.push(i)
  // }
  let arr = Array.from({ length: 10 }, (el, index) => index * 2 + 1)

  document.querySelector(".answer").insertAdjacentHTML("beforeend", `${arr}`)
})
