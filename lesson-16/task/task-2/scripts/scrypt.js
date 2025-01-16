"use strict"
class TMoney {
  #rateUsd = 0
  #hrnUser = 0
  #usdUser = 0

  constructor() {}

  get UsdUser() {
    return this.#usdUser
  }
  get RateUsd() {
    return this.#rateUsd
  }
  set RateUsd(rateUsd) {
    if (rateUsd <= 1 || rateUsd > 100)
      throw new Error(`${rateUsd}такий курс доллара не є коректним`)
    else {
      this.#rateUsd = rateUsd
      this.exchanger()
    }
  }

  exchanger() {
    if (this.#rateUsd) this.#usdUser = this.#hrnUser / this.#rateUsd
  }
  getMoney(money) {
    if (money > this.#hrnUser) throw new Error("немає стільки грошей")
    else {
      this.#hrnUser -= money
      this.exchanger()
    }
  }
  addMoney(money) {
    if (money <= 0) throw new Error("некоректна сума")
    else {
      this.#hrnUser += money
      this.exchanger()
    }
  }
  getRateUsdIn100Hrn() {
    if (!this.#rateUsd) {
      throw new Error("Курс долара не встановлено")
    }
    return 100 / this.#rateUsd
  }
}

try {
  const money = new TMoney()
  console.log(money)
  money.RateUsd = 40
  money.addMoney(4000)
  money.getRateUsdIn100Hrn()
  money.getMoney(2000)
  console.log(money.getRateUsdIn100Hrn())

  console.log(money)
} catch (error) {
  console.log(error.message)
}
