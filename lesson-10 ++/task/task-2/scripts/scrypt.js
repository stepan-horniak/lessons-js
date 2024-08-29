"usestrict"
addEventListener("load", function () {
  let arr = new Array(20).fill(0)
  arr.forEach((el, index, ar) => {
    index % 2 !== 0 ? (ar[index] = 1) : null
  })

  // for (let i = 0; i < 20; i++) {
  //   i % 2 === 1 ? (arr[i] = 1) : (arr[i] = 0)
  // }

  document.querySelector(".answer").insertAdjacentHTML("beforeend", `${arr}`)
})
