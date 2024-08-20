"usestrict"
addEventListener("load", function () {
  function randomNumber(max = 4, min = 1) {
    return min + Math.floor(Math.random() * (max - min) + 1)
  }
  let result = ""
  function showRandomImage(randomNum) {
    result += '<img src="../../'
    result += randomNum
    result += '.jpg" alt="">'
    return result
  }
  showRandomImage(randomNumber())
  const answer = document
    .querySelector(".answer")
    .insertAdjacentHTML("beforeend", result)
})
