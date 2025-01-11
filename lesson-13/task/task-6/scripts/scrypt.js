"usestrict"

function getLetter() {
  const word = "apple"
  let count = -1
  function innerfunc() {
    count++

    return word[count]
  }
  return innerfunc
}

let resultFun = getLetter()

function gameGuessedLetters(funcGetLetter) {
  alert(
    "вгадай слово: Це круглий фрукт, який росте на дереві, може бути червоним, зеленим або жовтим, і часто асоціюється зі здоров’ям. слово з 5 букв "
  )
  let resultText = ``
  let countGuessedLetters = 0
  for (let i = 1; i <= 5; i++) {
    let userLetter = prompt(`введіть букву № ${i}`),
      letter = funcGetLetter()

    if (userLetter.toLocaleLowerCase() === letter) {
      countGuessedLetters++
    }
    resultText += `${letter} ви ввели букву ${userLetter} <br>`
  }
  return [resultText, countGuessedLetters]
}

const [resultText, countGuessedLetters] = gameGuessedLetters(resultFun)

document.querySelector(
  ".answer"
).innerHTML = `${resultText} кількість вгаданих букв : ${countGuessedLetters}`
