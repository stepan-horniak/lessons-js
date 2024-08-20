"usestrict"
addEventListener("load", function () {
  let result = ""
  function createTable(row, column) {
    result += "<table><tbody>"
    for (let rows = 0; rows < row; rows++) {
      result += "<tr>"
      for (let columns = 0; columns < column; columns++) {
        result += "<th>"

        result += `${columns}`

        result += "</th>"
      }
      result += "</tr>"
    }
    result += "</tbody></table>"
  }
  createTable(4, 7)
  const answer = document
    .querySelector(".answer")
    .insertAdjacentHTML("beforeend", result)
})
