"use strict"

class TDate {
  #year
  #month
  #day
  constructor(year, month, day) {
    this.Year = year
    this.Month = month
    this.Day = day
  }
  get Year() {
    return this.#year
  }
  set Year(year) {
    if (year < 0 || year > 2025)
      throw new Error(`введений рік некоректний${year}`)
    else this.#year = year
  }
  get Month() {
    return this.#month
  }
  set Month(month) {
    if (month < 1 || month > 12)
      throw new Error(`введений місяць некоректний${month}`)
    else this.#month = month
  }
  get Day() {
    return this.#day
  }
  set Day(day) {
    if (day < 1 || day > 30) throw new Error(`введений день некоректний${day}`)
    else this.#day = day
  }

  increaseYear(year = 1) {
    this.#year += year
  }
  reductionYear(year = 1) {
    this.#year -= year
  }
  increaseMonth(month = 1) {
    let totalMonths = this.#month + month
    let monthNumber = Math.floor(((this.#month - 1 + month) % 12) + 1)
    let yearsToAdd = Math.floor((totalMonths - 1) / 12)
    yearsToAdd > 0 ? this.increaseYear(yearsToAdd) : null
    this.#month = monthNumber
  }
  reductionMonth(month = 1) {
    let totalMonths = this.#month - month
    let monthNumber = Math.floor((this.#month - 1 - month + 12) % 12) + 1
    let yearsToAdd = Math.abs(Math.floor((totalMonths - 1) / 12))
    yearsToAdd > 0 ? this.reductionYear(yearsToAdd) : null
    this.#month = monthNumber
  }

  increaseDay(day = 1) {
    let totalDay = this.#day + day
    let dayNumber = Math.floor(((this.#day - 1 + day) % 30) + 1)
    let monthToAdd = Math.floor((totalDay - 1) / 30)
    monthToAdd > 0 ? this.increaseMonth(monthToAdd) : null
    this.#day = dayNumber
  }
  reductionDay(day = 1) {
    let totalDay = this.#day - day
    let dayNumber = Math.floor((this.#day - 1 - day + 30) % 30) + 1
    let MonthToAdd = Math.abs(Math.floor((totalDay - 1) / 30))
    MonthToAdd > 0 ? this.reductionMonth(MonthToAdd) : null
    this.#day = dayNumber
  }
  toString() {
    return `рік-${this.#year} місяць-${this.#month} день-${this.#day} `
  }
}

try {
  const date = new TDate(2025, 1, 15)
  //   date.increaseYear(2)
  // date.reductionMonth(11)
  // date.reductionDay()
  document.querySelector(".answer").innerHTML = date
} catch (error) {
  console.log(error.message)
}
