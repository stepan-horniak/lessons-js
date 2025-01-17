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

//===========1,2,3,4========================================

let sumElementsRowColumn = (arr, startRow, endRow, startCol, endCol) => {
  let sum = 0

  for (let row = startCol; row < endCol; row++) {
    for (let col = startRow; col < endRow; col++) {
      sum += arr[row][col]
    }
  }

  return sum
}

//===========5===6============

let sumRow = (arr, start) => {
  let sum = 0

  for (let row = start; row < arr.length; row += 2) {
    const numberHalfInside = Math.floor(arrayRundomNumbers[row].length / 2)

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

const endRow = arrayRundomNumbers[0].length
const numberHalfOutside = Math.floor(arrayRundomNumbers.length / 2)

const endCol = arrayRundomNumbers.length
const numberHalfInside = Math.floor(arrayRundomNumbers[0].length / 2)

document.querySelector(".answer").innerHTML = `
<ol>
 <div>масив : [${arrayShow}]</div>
 <li>сума : ${sumElementsRowColumn(
   arrayRundomNumbers,
   0,
   numberHalfOutside,
   0,
   numberHalfInside
 )}</li>

 <li>сума : ${sumElementsRowColumn(
   arrayRundomNumbers,
   numberHalfOutside,
   endCol,
   0,
   numberHalfInside
 )}</li>
 <li>сума : ${sumElementsRowColumn(
   arrayRundomNumbers,
   0,
   numberHalfOutside,
   numberHalfInside,
   endRow
 )}</li>


 <li>сума : ${sumElementsRowColumn(
   arrayRundomNumbers,
   numberHalfOutside,
   endCol,
   numberHalfInside,
   endRow
 )}</li>

<li>сума : ${sumRow(arrayRundomNumbers, 0)}</li>
<li>сума : ${sumRow(arrayRundomNumbers, 1)}</li>
<li>сума : ${sumEvenRowOddCol(arrayRundomNumbers)}</li>

</ol>`
