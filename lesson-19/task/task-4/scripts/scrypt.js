window.addEventListener("load", () => {
  function getRandomNumber(min = 1, max = 100) {
    return min + Math.floor(Math.random() * max)
  }

  function generateTable(number, rowNum = 3, colNum = 3) {
    const container = document.querySelector(".container")

    for (let table = 1; table <= number; table++) {
      const tableEl = document.createElement("table")
      tableEl.className = `table`
      tableEl.setAttribute("clicks", "0")
      container.append(tableEl)

      for (let row = 0; row < rowNum; row++) {
        const tBodyEl = document.createElement("tbody")
        tableEl.append(tBodyEl)
        const trEl = document.createElement("tr")
        tBodyEl.append(trEl)

        for (let col = 0; col < colNum; col++) {
          const tdEl = document.createElement("td")
          tdEl.innerText = getRandomNumber()
          trEl.append(tdEl)
        }
      }

      const spanEl = document.createElement("span")
      spanEl.textContent = "0"
      tableEl.after(spanEl)
    }

    return container
  }

  function tableClickCount(e) {
    const element = e.target
    const tableEl = element.closest(".table")

    if (tableEl) {
      let clicks = parseInt(tableEl.getAttribute("clicks"))
      clicks++
      tableEl.setAttribute("clicks", clicks)

      const spanEl = tableEl.nextElementSibling
      spanEl.textContent = clicks

      const allTables = document.querySelectorAll(".table")
      allTables.forEach((table) => {
        table.style.border = "2px solid black"
      })

      tableEl.style.border = "4px solid red"
    }
  }

  generateTable(5)
  document
    .querySelector(".container")
    .addEventListener("click", tableClickCount)
})
