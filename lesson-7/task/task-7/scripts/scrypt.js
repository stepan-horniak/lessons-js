"usestrict"
addEventListener("load", function () {
  function randomNumber(max = 4, min = 1) {
    return min + Math.floor(Math.random() * (max - min) + 1)
  }
  function showRandomImage(randomNum) {
    return `<img style ='width:300px;' src="../../${randomNum}.jpg" alt="">`
  }
  let result = showRandomImage(randomNumber())
  document.querySelector(".answer").insertAdjacentHTML("beforeend", result)
})
