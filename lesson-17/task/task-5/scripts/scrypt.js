"use strict"
class TestData {
  constructor(firstNum, secondNum, operation, userAnswer, correctAnswer) {
    this.firstNum = firstNum
    this.secondNum = secondNum
    this.operation = operation
    this.userAnswer = userAnswer
    this.correctAnswer = correctAnswer
  }
  toString() {
    return `firstNum: ${this.firstNum}, secondNum: ${this.secondNum},operation : '${this.operation}', userAnswer : ${this.userAnswer}, correctAnswer: ${this.correctAnswer}`
  }
}
class MultChecker {
  firstNumber
  secondNumber
  resultMultiply
  userAnswer

  getRandomNumber() {
    return 1 + Math.floor(Math.random() * 9)
  }
  multiplyNumbers() {
    this.firstNumber = this.getRandomNumber()
    this.secondNumber = this.getRandomNumber()
    this.resultMultiply = this.firstNumber * this.secondNumber

    this.userAnswer = parseInt(
      prompt(`скільки буде : ${this.firstNumber} * ${this.secondNumber}`)
    )
    if (isNaN(this.userAnswer)) throw new Error(`було введено некоректне число`)
    return new TestData(
      this.firstNumber,
      this.secondNumber,
      "*",
      this.userAnswer,
      this.resultMultiply
    )
  }
}

class AddChecker {
  firstNumber
  secondNumber
  resultMultiply
  userAnswer
  getRandomNumber() {
    return 1 + Math.floor(Math.random() * 50)
  }
  addNumbers() {
    this.firstNumber = this.getRandomNumber()
    this.secondNumber = this.getRandomNumber()
    this.resultMultiply = this.firstNumber + this.secondNumber

    this.userAnswer = parseInt(
      prompt(`скільки буде : ${this.firstNumber} + ${this.secondNumber}`)
    )
    if (isNaN(this.userAnswer)) throw new Error(`було введено некоректне число`)

    return new TestData(
      this.firstNumber,
      this.secondNumber,
      "+",
      this.userAnswer,
      this.resultMultiply
    )
  }
}

class History {
  constructor() {
    this.history = []
  }

  addTestData(testData) {
    this.history.push(testData)
  }

  getHistory() {
    return this.history.map((test) => test.toString()).join("<br>")
  }
}

class TestManager {
  static instance = null

  constructor(numberQuestion = 3, time = 5000) {
    if (TestManager.instance) return TestManager.instance
    TestManager.instance = this

    this.numberQuestion = numberQuestion
    this.time = time
    this.history = new History()
    this.multChecker = new MultChecker()
    this.addChecker = new AddChecker()
    this.interval = null
  }

  startTesting() {
    this.interval = setInterval(() => {
      if (this.numberQuestion === 0) {
        clearInterval(this.interval)
        this.showHistory()
        return
      }

      const operationType = Math.random() > 0.5 ? "*" : "+"
      let testData
      if (operationType === "*") {
        testData = this.multChecker.multiplyNumbers()
      } else {
        testData = this.addChecker.addNumbers()
      }
      this.history.addTestData(testData)

      this.numberQuestion -= 1
    }, this.time)
  }
  showHistory() {
    document.querySelector(".answer").innerHTML = this.history.getHistory()
  }
}

const testManager = new TestManager()
testManager.startTesting()
