"use strict"
function getRandomNumber() {
  return 1 + Math.floor(Math.random() * 100)
}
function createTable(rowsNum = 3, columnsNum = 4) {
  let table = document.createElement("table")
  let tBody = document.createElement("tbody")
  table.append(tBody)

  for (let row = 0; row < rowsNum; row++) {
    let tr = document.createElement("tr")
    tBody.append(tr)
    for (let col = 0; col < columnsNum; col++) {
      let td = document.createElement("td")
      tr.append(td)
      td.append(getRandomNumber())
    }
  }
  return table
}
window.onload = function () {
  document.querySelector(".answer").append(createTable(7, 8))
}
