"usestrict"
addEventListener("load", function () {
  let userDay = parseInt(prompt("введіть номер дня тижня", "1"))
  function getWorkingDay(dayNumber) {
    let workingDay
    switch (dayNumber) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        workingDay = "робочий день"
        break
      case 6:
      case 7:
        workingDay = "вихідний"
        break
      default:
        throw new Error("некоректні дані")
        break
    }
    return workingDay
  }
  const workingDay = getWorkingDay(userDay)
  const answer = document
    .querySelector(".answer")
    .insertAdjacentHTML("beforeend", workingDay)
})
