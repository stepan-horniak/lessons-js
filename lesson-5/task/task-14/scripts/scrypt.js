"usestrict"
addEventListener("load", function () {
  const sum = 1000
  let userMoney = 0
  let count = sum - userMoney
  alert(`вам потрібно сплатити : ${sum} грн`)
  do {
    userMoney += parseInt(
      prompt(`введіть суму залишилось доплатити ${count} `, "")
    )
    count = sum - userMoney
  } while (userMoney < sum)
  alert("дякуємо за покупку")
})
