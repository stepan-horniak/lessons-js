"usestrict"
const profits = [
  [1200, 1500, 1100, 1400, 2000, 1700, 1600],
  [900, 800, 1000, 950, 1200, 1150, 1100],
  [2200, 2100, 2300, 2400, 2500, 2600, 2700],
  [500, 700, 800, 750, 600, 650, 700],
  [1300, 1400, 1350, 1450, 1500, 1550, 1600],
  [1700, 1800, 1750, 1650, 1600, 1550, 1500],
  [800, 850, 900, 950, 1000, 1050, 1100],
  [1900, 2000, 1950, 1850, 1800, 1750, 1700],
]

//==========1=============
let totalProfitPerWeek = (arr) => {
  let profit = arr.forEach((el) => el.reduce((prevVal, el) => prevVal + el))
  return profit
}

//==========2=============
let totalProfitByDay = (arr) => {
  let profit = profits.map((store) =>
    store.reduce((sum, profit) => sum + profit, 0)
  )

  return profit
}
console.log(totalProfitByDay(profits))
// console.log();

//=========3=============
//==========4=============
//==========5=============
//==========6=============
//==========7=============
//==========8=============
//==========9=============

document.querySelector(".answer").innerHTML = `
<ol>
<li>${totalProfitPerWeek(profits)}</li>
</ol>`
{
  /* <li>${}</li>
<li>${}</li>
<li>${}</li>
<li>${}</li>
<li>${}</li>
<li>${}</li>
<li>${}</li>
<li>${}</li> */
}
