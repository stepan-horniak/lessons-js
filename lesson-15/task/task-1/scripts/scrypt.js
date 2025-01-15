"use strict"

const obj1 = {
  numbers: [1, 2, 3, 4, 5, 6],
  getSum: function () {
    return this.numbers.reduce((prevValue, el) => prevValue + el, 0)
  },
}

const obj2 = {
  numbers: [2, 3, 4, 5, 6, 7, 8],
  getMultInRange: function (min, max) {
    return this.numbers
      .filter((num) => num >= min && num <= max)
      .reduce((prevValue, el) => prevValue * el, 1)
  },
}

const sumObj2Call = obj1.getSum.call(obj2)
console.log("Сума чисел з obj2 через call:", sumObj2Call)

const multObj1Call = obj2.getMultInRange.call(obj1, 2, 5)
console.log("Добуток чисел між 2 і 5 з obj1 через call:", multObj1Call)

const sumObj2Apply = obj1.getSum.apply(obj2)
console.log("Сума чисел з obj2 через apply:", sumObj2Apply)

const multObj1Apply = obj2.getMultInRange.apply(obj1, [2, 5])
console.log("Добуток чисел між 2 і 5 з obj1 через apply:", multObj1Apply)
