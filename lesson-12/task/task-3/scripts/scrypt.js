"use strict"

let arrayNumbers = [
  4, 2, 5, 876, 234, 567, 321, 654, 987, 6, 8, 9, 34, 12, 65, 13, 56, 86, 23,
  76, 451, 123, 45, 67, 89, 90, 24, 78, 102, 345,
]

function insertSort(array) {
  const sortArray = []
  let swapCount = 0

  for (let i = 0; i < array.length; i++) {
    let current = array[i]
    let inserted = false

    for (let j = 0; j < sortArray.length; j++) {
      if (current < sortArray[j]) {
        sortArray.splice(j, 0, current)
        swapCount++
        inserted = true
        break
      }
    }

    if (!inserted) {
      sortArray.push(current)
    }
  }

  return [sortArray, swapCount]
}

const result = insertSort(arrayNumbers)

console.log("Відсортований масив:", result[0])
console.log("Кількість обмінів:", result[1])

const answerElement = document.querySelector(".answer")
answerElement.innerHTML = `
    Відсортований масив: ${result[0].join(", ")}<br>
    Кількість обмінів: ${result[1]}
  `
