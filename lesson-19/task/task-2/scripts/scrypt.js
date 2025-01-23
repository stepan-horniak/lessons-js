window.addEventListener("load", () => {
  function showNumber(e) {
    let inputEl = e.target

    if (inputEl.tagName === "INPUT") {
      let currentElement = parseFloat(inputEl.value)

      while (inputEl.nextElementSibling) {
        let nextEl = inputEl.nextElementSibling
        nextEl.value = currentElement += 1
        inputEl = nextEl
      }

      while (inputEl.previousElementSibling) {
        let prevEl = inputEl.previousElementSibling
        prevEl.value = currentElement -= 1
        inputEl = prevEl
      }
    }
  }

  const container = document.querySelector(".container")

  container.addEventListener("input", showNumber)
})
