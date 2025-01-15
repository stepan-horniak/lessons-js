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

    let yearsToAdd = Math.floor((totalMonths - 1) / 12)
    if (yearsToAdd > 0) {
      this.increaseYear(yearsToAdd)
    }
    this.#month = ((totalMonths - 1) % 12) + 1
  }
  reductionMonth(month = 1) {
    let totalMonths = this.#month - month
    if (totalMonths === 0) totalMonths = 12
    let yearsToReduce = ((totalMonths - 1 - decrement + 12) % 12) + 1

    if (yearsToReduce > 0) {
      this.reductionYear(yearsToReduce)
    }
    this.#month = ((totalMonths - 1) % 12) + 1
  }
}

try {
  const date = new TDate(2025, 1, 15)
  console.log(date)
  //   date.increaseYear(2)
  date.reductionMonth(2)

  console.log(date)
} catch (error) {
  console.log(error.message)
}
