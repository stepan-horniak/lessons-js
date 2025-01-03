"usestrict"
addEventListener("load", function () {
  let userMonth = parseInt(prompt("введіть номер місяця", "1"))
  function getMonthName(monthNumber) {
    let monthName
    switch (monthNumber) {
      case 1:
        monthName = "січень"
        break
      case 2:
        monthName = "лютий"
        break
      case 3:
        monthName = "березень"
        break
      case 4:
        monthName = "квітень"
        break
      case 5:
        monthName = "травень"
        break
      case 6:
        monthName = "червень"
        break
      case 7:
        monthName = "липень"
        break
      case 8:
        monthName = "серпень"
        break
      case 9:
        monthName = "вересень"
        break
      case 10:
        monthName = "жовтень"
        break
      case 11:
        monthName = "листопад"
        break
      case 12:
        monthName = "грудень"
        break
      default:
        throw new Error("некоректні дані")
    }
    return monthName
  }
  const monthName = getMonthName(userMonth)
  document.querySelector(".answer").insertAdjacentHTML("beforeend", monthName)
})
