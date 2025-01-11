"usestrict"
let array = [1, 2, 3]

function generateSubsets(array) {
  const result = [] // Тут ми зберігатимемо всі підмножини

  function helper(index, subset) {
    // Коли індекс досягає довжини масиву, додаємо поточну підмножину в результат
    if (index === array.length) {
      result.push(subset)
      return
    }

    // Не включаємо поточний елемент в підмножину
    helper(index + 1, subset)

    // Включаємо поточний елемент в підмножину
    helper(index + 1, subset.concat(array[index]))
  }

  // Запускаємо рекурсивну функцію
  helper(0, [])

  return result
}
console.log(generateSubsets(array))
