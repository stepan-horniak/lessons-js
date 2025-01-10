let arrayNumbers = [
  4, 2, 5, 6, 8, 9, 34, 12, 65, 13, 56, 86, 23, 76, 451, 123, 45, 67, 89, 90,
  24, 78, 102, 345, 876, 234, 567, 321, 654, 987,
]

function shakerSort(array) {
  let leftIndex = 0
  let rightIndex = array.length - 1
  let swapCount = 0

  while (leftIndex < rightIndex) {
    for (let i = leftIndex; i < rightIndex; i++) {
      if (array[i] > array[i + 1]) {
        const akum = array[i]
        array[i] = array[i + 1]
        array[i + 1] = akum
        swapCount++
      }
    }
    rightIndex--

    for (let i = rightIndex; i > leftIndex; i--) {
      if (array[i] < array[i - 1]) {
        const akum = array[i]
        array[i] = array[i - 1]
        array[i - 1] = akum
        swapCount++
      }
    }
    leftIndex++
  }

  return [array, swapCount]
}

const result = shakerSort(arrayNumbers)
console.log("Відсортований масив:", result[0])
console.log("Кількість обмінів:", result[1])

document.querySelector(".answer").innerHTML = `
  Відсортований масив: ${result[0].join(", ")}<br>
  Кількість обмінів: ${result[1]}
`
