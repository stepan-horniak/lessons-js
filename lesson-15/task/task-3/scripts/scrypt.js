"use strict"
class Auto {
  constructor(
    brand,
    tankSize = 60,
    numberLiters = 25,
    numberSeats = 7,
    numberPassengers = 3
  ) {
    this.brand = brand
    this.tankSize = tankSize
    this.numberLiters = numberLiters
    this.numberSeats = numberSeats
    this.numberPassengers = numberPassengers
  }
  refuelLiters(liters) {
    this.tankSize - this.numberLiters >= liters
      ? (this.numberLiters += liters)
      : alert(
          `Неможливо заправити ${liters} літрів. У баку місця на ${
            this.tankSize - this.numberLiters
          } літрів.`
        )
    document.querySelector(".answer").innerHTML = `${this.numberLiters} <br>`
  }
  showNumberPassengers() {
    document.querySelector(
      ".answer"
    ).innerHTML += `${this.numberPassengers}<br>`
  }
  addPassengers(numberPassengers) {
    this.numberSeats - this.numberPassengers >= numberPassengers
      ? (this.numberPassengers += numberPassengers)
      : alert("стільки невлазить")
  }
  dropPassengers(numberPassengers) {
    this.numberPassengers - numberPassengers === 0
      ? alert("залиште хочаб водія")
      : this.numberPassengers - numberPassengers < 0
      ? alert("нема стільки пасажирів")
      : (this.numberPassengers -= numberPassengers)
  }
  toString() {
    return `<br>Авто: ${this.brand} 
  <br>Місткість баку: ${this.tankSize} літрів, 
  <br>Поточний рівень палива: ${this.numberLiters} літрів, 
  <br>Кількість місць: ${this.numberSeats}, 
  <br>Пасажири: ${this.numberPassengers}.`
  }
}

const Toyota = new Auto("Toyota")
Toyota.refuelLiters(20)
Toyota.addPassengers(4)
Toyota.showNumberPassengers()
Toyota.dropPassengers(3)
document.querySelector(".answer").innerHTML += Toyota
