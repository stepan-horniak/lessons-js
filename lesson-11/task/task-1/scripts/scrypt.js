"usestrict"

function getRandomNumber(min = 1, max = 10) {
  return min + Math.floor(Math.random() * max)
}

function getArrayRandomNumbers(userNumRow, userNumColumn) {
  let arr = []
  for (let row = 0; row < userNumRow; row++) {
    let arr2 = []
    for (let col = 0; col < userNumColumn; col++) {
      arr2.push(getRandomNumber())
    }
    arr.push(arr2)
  }
  return arr
}
const arrayRundomNumbers = getArrayRandomNumbers(5, 5)

//===========1========================================

let sumElementsRowFirstFromStartToHalf = (arr) => {
  let sum = 0
  let numberHalfOutside = Math.floor(arr.length / 2)

  for (let row = 0; row < numberHalfOutside; row++) {
    let numberHalfInside = Math.floor(arr[row].length / 2)

    for (let col = 0; col < numberHalfInside; col++) {
      sum += arr[row][col]
    }
  }

  return sum
}

//===========2===============
let sumElementsRowFirstFromHalfToEnd = (arr) => {
  let sum = 0
  let numberHalfOutside = Math.floor(arr.length / 2)

  for (let row = 0; row < numberHalfOutside; row++) {
    let numberHalfInside = Math.floor(arr[row].length / 2)

    for (let col = numberHalfInside; col < arr[row].length; col++) {
      sum += arr[row][col]
    }
  }

  return sum
}

//===========3===============
let sumElementsRowSecondFromStartToHalf = (arr) => {
  let sum = 0
  let numberHalfOutside = Math.floor(arr.length / 2)

  for (let row = numberHalfOutside; row < arr.length; row++) {
    let numberHalfInside = Math.floor(arr[row].length / 2)

    for (let col = 0; col < numberHalfInside; col++) {
      sum += arr[row][col]
    }
  }

  return sum
}

//===========4===============
let sumElementsRowSecondFromHalfToEnd = (arr) => {
  let sum = 0
  let numberHalfOutside = Math.floor(arr.length / 2)

  for (let row = numberHalfOutside; row < arr.length; row++) {
    let numberHalfInside = Math.floor(arr[row].length / 2)

    for (let col = numberHalfInside; col < arr[row].length; col++) {
      sum += arr[row][col]
    }
  }

  return sum
}

//===========5===6============

let sumRow = (arr, start) => {
  let sum = 0

  for (let row = start; row < arr.length; row += 2) {
    for (let col = 0; col < arr[row].length; col++) {
      sum += arr[row][col]
    }
  }
  return sum
}

//===========7===============

let sumEvenRowOddCol = (arr) => {
  let sum = 0

  for (let row = 0; row < arr.length; row += 2) {
    for (let col = 1; col < arr[row].length; col += 2) {
      sum += arr[row][col]
    }
  }
  return sum
}

//============================

let arrayShow = ``

for (let i = 0; i < arrayRundomNumbers.length; i++) {
  arrayShow += `<div>[${arrayRundomNumbers[i]}]</div>`
}

document.querySelector(".answer").innerHTML = `
<ol>
 <div>масив : [${arrayShow}]</div>
<li>сума : ${sumElementsRowFirstFromStartToHalf(arrayRundomNumbers)}</li>
<li>сума : ${sumElementsRowFirstFromHalfToEnd(arrayRundomNumbers)}</li>
<li>сума : ${sumElementsRowSecondFromStartToHalf(arrayRundomNumbers)}</li>
<li>сума : ${sumElementsRowSecondFromHalfToEnd(arrayRundomNumbers)}</li>
<li>сума : ${sumRow(arrayRundomNumbers, 0)}</li>
<li>сума : ${sumRow(arrayRundomNumbers, 1)}</li>
<li>сума : ${sumEvenRowOddCol(arrayRundomNumbers)}</li>
</ol>`
