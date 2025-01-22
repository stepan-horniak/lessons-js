"use strict"

function createList() {
  let numberRating = parseInt(document.getElementById("priceNumber").value)
  let createList = document.getElementById("createList")

  for (let numInput = 0; numInput < numberRating; numInput++) {
    let input = document.createElement("input")
    input.style = "margin:5px"
    input.setAttribute("id", "rating")
    input.setAttribute("type", "number")
    createList.append(input)
  }
  return createList
}

function getAverageRating() {
  let colectionRating = document.querySelectorAll("#rating")
  let totalRating = 0
  for (const rating of colectionRating) {
    totalRating += parseInt(rating.value)
  }

  return totalRating / colectionRating.length
}
window.onload = () => {
  document.getElementById("getTable").onclick = createList
  document.getElementById("getSum").onclick = () => {
    let averageRating = getAverageRating()
    document.getElementById("averageSum").append(averageRating)
  }
}
