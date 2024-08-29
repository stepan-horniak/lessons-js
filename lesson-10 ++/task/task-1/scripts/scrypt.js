"usestrict"
addEventListener("load", function () {
  let arr = new Array(20).fill(0)
  arr[0] = 1
  arr[arr.length - 1] = 1
  console.log(arr)

  document.querySelector(".answer").insertAdjacentHTML("beforeend", arr)
})
