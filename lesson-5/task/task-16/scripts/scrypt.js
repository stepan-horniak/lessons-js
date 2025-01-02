"usestrict"
addEventListener("load", function () {
  const answer = document.querySelector(".answer")

  let totalProfit = 0

  Loop: for (let week = 1; week <= 10; week++) {
    let storeProfitWeek = 0

    for (let day = 1; day <= 7; day++) {
      let userProfit = parseFloat(
        prompt(`введіть прибуток маагазина за тиждень ${week} день${day}`, `10`)
      )
      if (isNaN(userProfit) || userProfit === null) break Loop
      totalProfit += userProfit
      storeProfitWeek += userProfit
      answer.insertAdjacentHTML("beforeend", ` ${userProfit}<br>`)
    }

    answer.insertAdjacentHTML(
      "beforeend",
      `загальна кіслькість прибутку за тиждень : ${week} =${storeProfitWeek}<br>`
    )
  }
  answer.insertAdjacentHTML(
    "beforeend",
    `загальна кіслькість прибутку : ${storeProfitCount}`
  )
})
