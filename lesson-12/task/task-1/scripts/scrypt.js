"usestrict"

let arrayNumbers = [
  4, 8, 9, 987, 876, 234, 567, 321, 654, 34, 12, 65, 2, 5, 6, 13, 56, 86, 23,
  76, 451, 123, 45, 67, 89, 90, 24, 78, 102, 345,
]

function sortBuble(array) {
  let exchange,
    count = 0
  do {
    exchange = false
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        let b = array[i - 1]
        array[i - 1] = array[i]
        array[i] = b
        exchange = true
        count++
      }
    }
  } while (exchange)
  return count
}

document.querySelector(".answer").innerHTML = `було обмінів : ${sortBuble(
  arrayNumbers
)}`
console.log(arrayNumbers)
