"use strict"

class MultChecker {
  constructor() {
    this.firstNumber = 7
    this.secondNumber = 0
    this.numberCorrectAnswers = 0
    this.numberWrongAnswers = 0
  }

  render() {
    document.querySelector(
      ".answer"
    ).innerHTML = `Кількість правильних відповідей: ${this.numberCorrectAnswers} <br>
      Кількість неправильних відповідей: ${this.numberWrongAnswers}`
  }

  generationExample() {
    const randomNum = 1 + Math.floor(Math.random() * 9)
    this.secondNumber = randomNum
    const question = `${this.firstNumber} * ${this.secondNumber} = ?`
    const correctAnswer = this.firstNumber * this.secondNumber

    const userAnswer = parseInt(prompt(`Скільки буде: ${question}`))

    if (isNaN(userAnswer)) {
      alert("Будь ласка, введіть число.")
      return this.generationExample()
    }

    if (userAnswer === correctAnswer) {
      alert("Правильно!")
      this.numberCorrectAnswers++
    } else {
      alert(`Неправильно. Правильна відповідь: ${correctAnswer}`)
      this.numberWrongAnswers++
    }

    this.render()

    const continueTest = confirm("Хочете продовжити?")
    if (continueTest) {
      this.generationExample()
    } else {
      alert("Тест завершено!")
    }
  }
}

const multChecker = new MultChecker()

document.querySelector(".answer").innerHTML += '<div class="answer"></div>'

multChecker.generationExample()
