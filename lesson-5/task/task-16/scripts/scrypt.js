"usestrict"
addEventListener("load", function () {
  const answer = document.querySelector(".answer")

  let storeProfitCount = 0
  let storeProfitWeekCount = 0
  for (let week = 1; week <= 2; week++) {
    storeProfitWeekCount = 0
    for (let day = 1; day <= 7; day++) {
      let userProfit = parseFloat(
        prompt(`введіть прибуток маагазина за тиждень ${week} день${day}`)
      )
      storeProfitWeekCount += userProfit
      storeProfitCount += userProfit
      answer.insertAdjacentHTML("beforeend", ` ${userProfit}<br>`)
    }
    answer.insertAdjacentHTML(
      "beforeend",
      `загальна кіслькість прибутку за тиждень : ${week} =${storeProfitWeekCount}<br>`
    )
  }
  answer.insertAdjacentHTML(
    "beforeend",
    `загальна кіслькість прибутку : ${storeProfitCount}`
  )
})
