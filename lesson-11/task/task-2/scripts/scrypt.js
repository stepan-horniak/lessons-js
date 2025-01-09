"usestrict"
const profits = [
  [200, 1500, 1100, 1400, 50, 1700, 1600],
  [900, 800, 1000, 950, 1200, 50, 1100],
  [20, 2100, 300, 400, 500, 600, 700],
  [500, 700, 800, 750, 600, 650, 700],
  [100, 400, 150, 1450, 50, 50, 1600],
  [1700, 1800, 100, 1650, 600, 50, 1500],
  [800, 850, 900, 50, 100, 1050, 100],
  [100, 200, 190, 50, 1800, 750, 1700],
]

//==========1=============

const totalProfitPerWeek = profits.map((el) =>
  el.reduce((prevValue, el) => el + prevValue)
)

//==========2=============

function totalProfitByDay(arr) {
  let profitsPerDay = new Array(7).fill(0)
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      profitsPerDay[col] += arr[row][col]
    }
  }
  return profitsPerDay
}

//=========3==4=========

function totalProfitWorkingAndWeekendDay(arr, dayNumStart, dayNumEnd) {
  let totalSum = 0
  for (let row = 0; row < arr.length; row++) {
    for (let col = dayNumStart; col <= dayNumEnd; col++) {
      totalSum += arr[row][col]
    }
  }
  return totalSum
}

//==========5=============

function maximumProfitForWednesday(arr) {
  return Math.max(...arr.map((row) => row[2]))
}

//==========6=============

function formListGreaterThan200(arr) {
  return arr.flat().filter((el) => el > 200)
}

//==========7=============

function sortWeekByGrowth(arr) {
  let sortArr = arr.map((el) => [...el].sort((a, b) => a - b))
  return sortArr
}

//================================
function showTaksSort(resultSort) {
  let result = ``
  for (const element of resultSort) {
    result += `<div>[${element}]</div>`
  }
  return result
}
//==========8=============

function sortMaxElementInRow(arr) {
  return [...arr].sort((a, b) => Math.max(...a) - Math.max(...b))
}

//==========9=============

function sortSumMaxElementInRow(arr) {
  let sortArr = [...arr].sort(
    (a, b) =>
      a.reduce((prevValue, el) => el + prevValue) -
      b.reduce((prevValue, el) => el + prevValue)
  )

  return sortArr
}

//=============================
document.querySelector(".answer").innerHTML = `
<div>початковий масив чосел : ${showTaksSort(profits)}</div>
<ol>

<li>${totalProfitPerWeek}</li>
<li>${totalProfitByDay(profits)}</li>
<li>${totalProfitWorkingAndWeekendDay(profits, 0, 4)}</li>
<li>${totalProfitWorkingAndWeekendDay(profits, 5, 6)}</li>
<li>${maximumProfitForWednesday(profits)}</li>
<li>[${formListGreaterThan200(profits)}]</li>
<li>${showTaksSort(sortWeekByGrowth(profits))}</li>
 <li>${showTaksSort(sortMaxElementInRow(profits))}</li>  
 <li>${showTaksSort(sortSumMaxElementInRow(profits))}</li>  


</ol>`
