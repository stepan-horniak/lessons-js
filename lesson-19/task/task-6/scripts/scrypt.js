window.addEventListener("load", () => {
  const container = document.querySelector(".row")

  container.addEventListener("click", (e) => {
    const element = e.target
    if (element.classList.contains("arrow")) {
      if (element.closest(".general__list")) {
        const currentElement = element.closest(".general__item")
        const selectedItem = document.querySelector(".selected__list")
        selectedItem.append(currentElement)
      } else {
        const generalItem = document.querySelector(".general__list")
        const currentElement = element.closest(".general__item")
        generalItem.append(currentElement)
      }
    }
  })
})
