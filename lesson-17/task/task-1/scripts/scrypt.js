"use strict"
class SearchNumbers {
  static countPositiveNumber(arrNumbers) {
    return arrNumbers.filter((el) => el > 0)
  }

  static countNegativeNumber(arrNumbers) {
    return arrNumbers.filter((el) => el <= 0)
  }

  static numbersEntrySomeNumber(arrNumbers, num) {
    return arrNumbers.reduce(
      (count, number) => (number === num ? count + 1 : count),
      0
    )
  }
}

const numbers = [
  12, -7, 5, -3, 19, -14, 8, 0, 22, -5, 6, -11, 3, 15, -2, 15, -6, 10, -8, 7,
  -4, 15,
]

const searchNumber = new SearchNumbers()
console.log(SearchNumbers.countPositiveNumber(numbers))
console.log(SearchNumbers.countNegativeNumber(numbers))
console.log(SearchNumbers.numbersEntrySomeNumber(numbers, 10))
