"usestrict"
// if (confirm("запускаємо код")) {
const userNum = 10
function getRandonNumber(min = 1, max = 1500) {
  return min + Math.floor(Math.random() * (max - min + 1))
}
function getArrayRandomNumbers(userNumber) {
  let arr = []
  for (let i = 0; i < userNumber; i++) {
    arr.push(getRandonNumber())
  }
  return arr
}
const arrayRandomNumbers = getArrayRandomNumbers(userNum)
console.log(arrayRandomNumbers)

//=========1================

// const newArrayGreaterThan1000 = arrayRandomNumbers.filter((el) => el > 1000)
//========2==============

// function getArrayGreaterThan1000Index(array) {
//   let arrayIndex = []
//   for (let i = 0; i < array.length; i++) {
//     array[i] > 1000 ? arrayIndex.push(i) : null
//   }
//   return arrayIndex
// }
// const newGreaterThan1000Index = getArrayGreaterThan1000Index(arrayRandomNumbers)

//==========3===============
// const greaterThanPreviousValue = arrayRandomNumbers.filter(
//   (el, index, arr) => index > 0 && el > arr[index - 1]
// )
//===========4================

// const valuePricesPercentagesRelationMaximum = arrayRandomNumbers.map(
//   (el, index, arr) => {
//     const max = Math.max(...arrayRandomNumbers)
//     console.log(max)
//     return (el / max) * 100
//   }
// )
//==========5==========
// const countNumberPriceChanges = (arr) {
//   el > 0 && el !== arr[index - 1] ? el : null
// }
//===========6=============

// const determinePriceLessThan1000 = arrayRandomNumbers.some((el) => el < 1000)

//===========7================

// const determineAllPricesGreater1000 = arrayRandomNumbers.every(
//   (el) => el > 1000
// )

//===========8==============

// const countArrayGreaterThan1000 = (arr) => {
//   let count = 0
//   for (const element of arr) {
//     if (element > 1000) {
//       count++
//     }
//   }
//   return count
// }

//===========9================

// const summGreaterThan1000 = arrayRandomNumbers.reduce(
//   (prevValue, el) => (el > 1000 ? (prevValue += el) : prevValue),
//   0
// )

// ==========10===========

// const findFirstPriceGreaterThan1000 = arrayRandomNumbers.find((el) => el > 1000)

// ===========11=========

// const findIndexFirstPriceGreaterThan1000 = arrayRandomNumbers.findIndex(
//   (el) => el > 1000
// )

// }
