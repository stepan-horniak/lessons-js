"use strict"

class Reminder {
  static instance // Статичне поле для перевірки, чи існує вже екземпляр нагадувача
  #interval
  #counter = 0 // Лічильник кількості нагадувань
  #showTextHtml = document.querySelector(".answer")
  #buttonStop = document.getElementById("stop")

  constructor(arrReminder, seconds) {
    if (Reminder.instance) {
      console.log("Нагадувач вже існує!")
      return Reminder.instance
    }
    Reminder.instance = this

    this.arrReminder = arrReminder
    this.seconds = seconds
    this.showReminder()
  }

  randomWord() {
    const random = Math.floor(Math.random() * this.arrReminder.length)
    return this.arrReminder[random]
  }

  showReminder() {
    this.#interval = setInterval(() => {
      this.#counter++
      this.#showTextHtml.innerHTML += `Нагадування №${
        this.#counter
      }: ${this.randomWord()}<br>`
    }, this.seconds)
  }

  stopRemainder() {
    clearInterval(this.#interval)
    this.#showTextHtml.innerHTML += "Таймер зупинено.<br>"
  }

  changeMessage(newWord, index) {
    if (index >= 0 && index < this.arrReminder.length) {
      this.arrReminder[index] = newWord
      this.#showTextHtml.innerHTML += `Повідомлення змінено на: ${newWord}<br>`
    }
  }
}

const words = [
  "берег",
  "літо",
  "місяць",
  "гори",
  "вогонь",
  "друзі",
  "книга",
  "пісня",
  "картина",
  "сніг",
  "диво",
  "погода",
]

const remainder = new Reminder(words, 5000)

document.getElementById("stop").addEventListener("click", () => {
  remainder.stopRemainder()
})

document.querySelector(".change-word").addEventListener("click", () => {
  const newWord = "нове слово"
  const index = 2
  remainder.changeMessage(newWord, index)
})
