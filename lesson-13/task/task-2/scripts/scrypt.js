"usestrict"
const athletes = ["Usain", "Michael", "Serena", "Kylian"]
// Функція для генерації всіх перестановок
function generatePermutations(array) {
  const result = []

  // Базовий випадок: якщо в масиві тільки один елемент, повертаємо його як є
  if (array.length === 1) {
    result.push(array)
    return result
  }

  // Для кожного елемента масиву генеруємо перестановки для решти
  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i]
    const remainingElements = []

    // Створюємо масив решти елементів без поточного
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        remainingElements.push(array[j])
      }
    }

    // Рекурсивно генеруємо перестановки для решти елементів
    const remainingPermutations = generatePermutations(remainingElements)

    // Додаємо поточний елемент до кожної перестановки решти
    for (let permutation of remainingPermutations) {
      result.push([currentElement, ...permutation])
    }
  }

  return result
}
// Генерація всіх можливих результатів
const results = generatePermutations(athletes)

// Виведення результатів
console.log("All possible results (rankings):")
results.forEach((result, index) => {
  console.log(`Result ${index + 1}: ${result.join(", ")}`)
})
