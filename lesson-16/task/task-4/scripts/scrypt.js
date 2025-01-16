"use strict"
class TBancomat {
  #banknotes5
  #banknotes10
  #banknotes20
  #banknotes50
  #banknotes100
  #banknotes200
  constructor(
    banknotes5 = 0,
    banknotes10 = 0,
    banknotes20 = 0,
    banknotes50 = 0,
    banknotes100 = 0,
    banknotes200 = 0
  ) {
    this.#banknotes5 = banknotes5
    this.#banknotes10 = banknotes10
    this.#banknotes20 = banknotes20
    this.#banknotes50 = banknotes50
    this.#banknotes100 = banknotes100
    this.#banknotes200 = banknotes200
  }
  minSumATM() {
    if (this.#banknotes5) return 5
    else if (this.#banknotes10) return 10
    else if (this.#banknotes20) return 20
    else if (this.#banknotes50) return 50
    else if (this.#banknotes100) return 100
    else if (this.#banknotes200) return 200
    else throw new Error("у банкомата закінчились купюри ")
  }
  maxSumATM() {
    let maxSum =
      this.#banknotes5 * 5 +
      this.#banknotes10 * 10 +
      this.#banknotes20 * 20 +
      this.#banknotes50 * 50 +
      this.#banknotes100 * 100 +
      this.#banknotes200 * 200
    return maxSum
  }
  getMoney(money) {
    if (money < this.minSumATM() || money > this.maxSumATM()) {
      return "Сума недоступна для зняття."
    }
    const arrBanknotes = []
    let banknotes = money

    const sum200 = Math.floor(banknotes / 200)
    banknotes %= 200
    arrBanknotes.push(`200грн : ${sum200} купюр`)

    const sum100 = Math.floor(banknotes / 100)
    banknotes %= 100
    arrBanknotes.push(`100грн : ${sum100} купюр`)

    const sum50 = Math.floor(banknotes / 50)
    banknotes %= 50
    arrBanknotes.push(`50грн : ${sum50} купюр`)

    const sum20 = Math.floor(banknotes / 20)
    banknotes %= 20
    arrBanknotes.push(`20грн : ${sum20} купюр`)

    const sum10 = Math.floor(banknotes / 10)
    banknotes %= 10
    arrBanknotes.push(`10грн : ${sum10} купюр`)

    const sum5 = Math.floor(banknotes / 5)
    banknotes %= 5
    arrBanknotes.push(`5грн : ${sum5} купюр`)

    return arrBanknotes.join("<br>")
  }
}

try {
  const bancomat = new TBancomat(10, 10, 10, 10, 100, 100)
  let result = `${bancomat.getMoney(30850)}`

  result += `<br> мінімальна сума для зняття : ${bancomat.minSumATM()}`
  result += `<br> максимальна сума для зняття : ${bancomat.maxSumATM()}`
  document.querySelector(".answer").innerHTML = result
} catch (error) {
  console.log(error.message)
}
