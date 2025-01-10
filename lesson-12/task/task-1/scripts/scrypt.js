"usestrict"

let arrayNumbers = [
  4, 2, 5, 6, 8, 9, 34, 12, 65, 13, 56, 86, 23, 76, 451, 123, 45, 67, 89, 90,
  24, 78, 102, 345, 876, 234, 567, 321, 654, 987,
]

function sortBuble(array) {
  let rearranged,
    count = 0
  do {
    rearranged = false
    for (let i = 1; i < array.length - 1; i++) {
      if (array[i - 1] > array[i]) {
        let b = array[i - 1]
        array[i - 1] = array[i]
        array[i] = b
        rearranged = true
        count++
      }
    }
  } while (rearranged)
  return count
}

document.querySelector(".answer").innerHTML = `було обмінів : ${sortBuble(
  arrayNumbers
)}`
