"usestrict"
let array = [1, 2, 3]

function generateSubsets(array) {
  const result = [] // Тут ми зберігаємо всі підмножини

  // Функція, яка додає підмножини до результату
  function helper(index, currentSubset) {
    // Якщо ми пройшли всі елементи масиву
    if (index === array.length) {
      result.push(currentSubset) // Додаємо поточну підмножину до результату
      return
    }

    // Розглядаємо два варіанти:
    // 1. Не додаємо поточний елемент
    helper(index + 1, currentSubset)

    // 2. Додаємо поточний елемент
    helper(index + 1, [...currentSubset, array[index]])
  }

  // Запускаємо рекурсію з першого елемента і порожньої підмножини
  helper(0, [])

  return result
}

console.log(generateSubsets(array))
