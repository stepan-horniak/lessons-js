"use strict"

function getSumTrip() {
  const auto = document.getElementById("auto")
  const food = document.querySelectorAll(".food")
  const guide = document.querySelector('input[name="guide"]:checked')

  let totalPrice = 0

  totalPrice += parseFloat(
    auto.options[auto.selectedIndex].getAttribute("price")
  )

  for (const element of food) {
    if (element.checked) {
      totalPrice += parseFloat(element.getAttribute("price"))
    }
  }

  totalPrice += parseFloat(guide.getAttribute("price"))

  return totalPrice
}
window.onload = function () {
  document.querySelector("#totalPrice").onclick = () => {
    let result = getSumTrip()
    document.querySelector(".result-sum").innerText = result
  }
}
