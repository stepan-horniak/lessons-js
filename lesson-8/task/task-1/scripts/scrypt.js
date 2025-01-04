"usestrict"
addEventListener("load", function () {
  let visitorsShopPerWeek = [10, 12, 8, 321, 100, 8, 321]
  function getLessThan20PerWeek(visitors) {
    let lessThan20 = ""
    for (let i = 0; i < visitors.length; i++) {
      if (visitors[i] < 20) {
        lessThan20 += `${i + 1},`
      }
    }
    return lessThan20
  }

  function getMinimumPerWeek(visitors) {
    let min = Math.min(...visitors)
    let numberDay = ``
    for (let i = 0; i < visitors.length; i++) {
      if (visitors[i] === min) {
        numberDay += `${i + 1},`
      }
    }
    return numberDay
  }

  function getMaximumPerWeek(visitors) {
    let max = Math.max(...visitors)
    let numberDay = ``

    for (let i = 0; i < visitors.length; i++) {
      if (visitors[i] === max) {
        numberDay += `${i + 1},`
      }
    }

    return numberDay
  }

  function getTotalVisitorsPerWeek(visitors) {
    let totalVisitorsWorkingDay = 0
    let totalVisitorsWeekend = 0
    let result = []
    for (let i = 0; i < visitors.length; i++) {
      if (i + 1 <= 5) totalVisitorsWorkingDay += visitors[i]
      else totalVisitorsWeekend += visitors[i]
    }
    return (result = [totalVisitorsWorkingDay, totalVisitorsWeekend])
  }
  document.querySelector(".answer").insertAdjacentHTML(
    "beforeend",
    `<p>масив чисел : [${visitorsShopPerWeek}]</p>
      <p>номери днів, протягом яких кількість відвідувачів була меншою за 20 : ${getLessThan20PerWeek(
        visitorsShopPerWeek
      )}</p>
    <p>номери днів, коли кількість відвідувачів була мінімальною : ${getMinimumPerWeek(
      visitorsShopPerWeek
    )}</p>
      <p>номери днів, коли кількість відвідувачів була максимальною : ${getMaximumPerWeek(
        visitorsShopPerWeek
      )}</p>
      <p>загальну кількість клієнтів у робочі дні : ${
        getTotalVisitorsPerWeek(visitorsShopPerWeek)[0]
      } загальну кількість клієнтів на вихідних : ${
      getTotalVisitorsPerWeek(visitorsShopPerWeek)[1]
    }</p>
      `
  )
})
