window.addEventListener("load", () => {
  function getRandomNumber(max = 10, min = 1) {
    return min + Math.floor(Math.random() * max)
  }
  function createList() {
    const container = document.querySelector(".container")

    for (let list = 0; list < 5; list++) {
      let ul = document.createElement("ul")
      ul.className = "list"
      container.append(ul)
      let randomItem = getRandomNumber()
      for (let item = 0; item < randomItem; item++) {
        let li = document.createElement("li")
        li.textContent = getRandomNumber(100, 1)
        ul.append(li)
      }
    }
    return container
  }
  createList()

  function toColor() {
    const listEl = document.querySelectorAll(".list")
    for (const element of listEl) {
      if (element.children.length % 2 === 0) {
        element.style = "color: green;"
      } else element.style = "color: red;"
    }
  }

  document.querySelector(".button").addEventListener("click", toColor)
})
