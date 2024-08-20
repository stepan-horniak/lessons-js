"usestrict"
addEventListener("load", function () {
  function getCentimetersInInches(number) {
    centimetersInInches = number / 0.393700787
    return centimetersInInches
  }
  function getKilogramsInPounds(number) {
    kilogramsInPounds = number * 2.20462
    return kilogramsInPounds
  }
  function getKilometersToMiles(number) {
    kilometersToMiles = number * 0.621371192
    return kilometersToMiles
  }
  let userNumber = parseFloat(prompt("введіть число", "5"))

  let kilometersToMiles = 0
  let centimetersInInches = 0
  let kilogramsInPounds = 0

  getCentimetersInInches(userNumber)
  getKilogramsInPounds(userNumber)
  getKilometersToMiles(userNumber)

  const answer = document
    .querySelector(".answer")
    .insertAdjacentHTML(
      "beforeend",
      `<p>ваше число: ${userNumber}</p> <p>у дюймах: ${centimetersInInches}</p><p>у фунтах: ${kilogramsInPounds}</p><p> у милях: ${kilometersToMiles}</p>`
    )
})
