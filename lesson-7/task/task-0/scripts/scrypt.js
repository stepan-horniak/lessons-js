"usestrict"
addEventListener("load", function () {
  let userMonth = parseInt(prompt("введіть номер місяця", "1"))
  function getSeason(monthNumber) {
    let season
    switch (monthNumber) {
      case 12:
      case 1:
      case 2:
        season = "зима"
        break
      case 3:
      case 4:
      case 5:
        season = "весна"
        break
      case 6:
      case 7:
      case 8:
        season = "літо"
        break
      case 9:
      case 10:
      case 11:
        season = "осінь"
        break
      default:
        throw new Error("некоректні дані")
    }
    return season
  }
  const season = getSeason(userMonth)
  document.querySelector(".answer").insertAdjacentHTML("beforeend", season)
})
