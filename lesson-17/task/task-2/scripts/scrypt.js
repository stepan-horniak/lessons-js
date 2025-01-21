"use strict"

class CompanyCar {
  static auto

  constructor(currentAuto) {
    if (CompanyCar.auto) return CompanyCar.auto

    CompanyCar.auto = currentAuto

    this.driver = currentAuto.driver
    this.brand = currentAuto.brand
    this.number = currentAuto.number
    CompanyCar.auto = this
  }

  toString() {
    return `Водій: ${CompanyCar.auto.driver}, Марка: ${CompanyCar.auto.brand}, Номер авто: ${CompanyCar.auto.number}`
  }
}

try {
  const auto1 = { driver: "ivan", brand: "toyota", number: "ao4343oa" }
  const newCompanyCar1 = new CompanyCar(auto1)
  console.log(newCompanyCar1)

  const auto2 = { driver: "vasia", brand: "bmw", number: "ao2323oa" }
  const newCompanyCar2 = new CompanyCar(auto2)
  console.log(newCompanyCar2)

  document.querySelector(".answer").innerHTML = newCompanyCar1
} catch (error) {
  console.log(error.message)
}
