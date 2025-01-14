const athletes = ["Usain", "Michael", "Serena", "Kylian"]

function generatePermutations(array) {
  const allPermutations = []

  // Базовий випадок: якщо в масиві тільки один елемент, повертаємо його
  if (array.length === 1) {
    allPermutations.push(array) // Один елемент, перестановка вже готова
    return allPermutations
  }
  // Для кожного елемента масиву генеруємо перестановки для решти елементів
  for (let i = 0; i < array.length; i++) {
    const currentAthlete = array[i] // Поточний спортсмен
    const remainingAthletes = [] // Массив інших спортсменів
    // Створюємо масив без поточного спортсмена
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        remainingAthletes.push(array[j])
      }
    }
    // Рекурсивно генеруємо перестановки для решти спортсменів
    const remainingPermutations = generatePermutations(remainingAthletes)
    // Додаємо поточного спортсмена до кожної перестановки
    for (let permutation of remainingPermutations) {
      allPermutations.push([currentAthlete, ...permutation])
    }
  }

  return allPermutations // Повертаємо всі перестановки
}

const rankings = generatePermutations(athletes)

console.log("All possible results (rankings):")
rankings.forEach((result, index) => {
  console.log(`Result ${index + 1}: ${result.join(", ")}`)
})
