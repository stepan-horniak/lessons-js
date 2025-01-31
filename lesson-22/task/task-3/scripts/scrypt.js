window.addEventListener("load", () => {
  //============

  class CurrentDate {
    constructor(inputIdDateUser) {
      this.inputIdDateUser = document.getElementById(inputIdDateUser)
    }
    greetingTimeOfDay() {
      const time = new Date().getHours()
      let greeting
      switch (time) {
        case 7:
        case 8:
        case 9:
        case 10:
          greeting = "добрий ранок"
          break
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
          greeting = "добрий день"
          break
        case 17:
        case 18:
        case 19:
        case 20:
          greeting = "добрий вечір"
          break

        default:
          greeting = "пора спати"

          break
      }
      return greeting
    }
    showDateFormMonthYear() {
      const monthNames = [
        "Січень",
        "Лютий",
        "Березень",
        "Квітень",
        "Травень",
        "Червень",
        "Липень",
        "Серпень",
        "Вересень",
        "Жовтень",
        "Листопад",
        "Грудень",
      ]
      const month = new Date().getMonth() + 1
      const year = new Date().getFullYear()
      let day = new Date().getDate()

      if (day === 6 || day === 0) {
        day = "вихідний"
      } else day = "робочий"

      return `${monthNames[month - 1]} - ${year} - ${day}`
    }
    currentSeason() {
      const month = new Date().getMonth()
      let season
      switch (month) {
        case 2:
        case 3:
        case 4:
          season = "весна"
          break
        case 5:
        case 6:
        case 7:
          season = "літо"
          break
        case 8:
        case 9:
        case 10:
          season = "осінь"
          break
        case 11:
        case 0:
        case 1:
          season = "зима"
          break

        default:
          season = "пора спати"

          break
      }
      return season
    }
    determineUserAge(e) {
      const curentTime = Date.now()
      const valueUser = e.target.value
      const dateUser = new Date(`${valueUser.replaceAll(".", "-")}`)
      const milisecondsUser = dateUser.getTime()
      let yearUserMiliseconds = curentTime - milisecondsUser

      const oneYear = 365.25 * 24 * 60 * 60 * 1000
      const oneMonth = oneYear / 12
      const oneDay = 24 * 60 * 60 * 1000

      const years = Math.floor(yearUserMiliseconds / oneYear)
      yearUserMiliseconds -= years * oneYear

      const months = Math.floor(yearUserMiliseconds / oneMonth)
      yearUserMiliseconds -= months * oneMonth

      const days = Math.floor(yearUserMiliseconds / oneDay)

      const divEl = document.createElement("div")

      divEl.textContent = `вам : ${years} років, ${months} місяців, ${days} днів`

      this.containerSelector.prepend(divEl)
    }
    createWrapperEl(el) {
      const divEl = document.createElement("div")
      divEl.style.border = "3px solid black"
      divEl.textContent = el
      this.wrapperEl = divEl
      return divEl
    }
    userGoingVacation56DayGetDate() {
      const currentDate = Date.now()
      const milisecondsVacation = 56 * 24 * 60 * 60 * 1000
      const year = new Date(currentDate + milisecondsVacation).getFullYear()
      const month = new Date(currentDate + milisecondsVacation).getMonth() + 1
      const day = new Date(currentDate + milisecondsVacation).getDate()
      return `ваша відпустка закінчується ${year}.${month
        .toString()
        .padStart(2, 0)}.${day.toString().padStart(2, 0)}`
    }
    render(containerSelector) {
      this.containerSelector = document.querySelector(containerSelector)

      this.containerSelector.append(
        this.createWrapperEl(this.greetingTimeOfDay())
      )
      this.containerSelector.append(
        this.createWrapperEl(this.showDateFormMonthYear())
      )
      this.containerSelector.append(this.createWrapperEl(this.currentSeason()))
      this.containerSelector.append(
        this.createWrapperEl(this.userGoingVacation56DayGetDate())
      )

      this.inputIdDateUser.addEventListener("change", (e) =>
        this.determineUserAge(e)
      )
    }
  }
  const currentDate = new CurrentDate("inputDateUser")
  currentDate.render(".container")

  //=======================
})
