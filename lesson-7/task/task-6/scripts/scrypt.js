"usestrict"

addEventListener("load", function () {
  if (confirm("запускаємо код")) {
    let result = ""
    function createTable(row, column, message = `stepan`) {
      result += "<table style = 'border:4px solid black'><tbody>"
      for (let rows = 0; rows < row; rows++) {
        result += "<tr>"
        for (let columns = 0; columns < column; columns++) {
          result += `<th style = 'border:2px solid black; font-size: 30px;'>${message}</th>`
        }
        result += "</tr>"
      }
      result += "</tbody></table>"
    }
    const userNumberRow = parseInt(prompt("введіть кількість рядків", "5")),
      userNumbercolumn = parseInt(prompt("введіть кількість колонок", "7")),
      userMessage = prompt("введіть повідомлення", "Степан")
    createTable(userNumberRow, userNumbercolumn, userMessage)
    document.querySelector(".answer").insertAdjacentHTML("beforeend", result)
  }
})
