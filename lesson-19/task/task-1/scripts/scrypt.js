window.addEventListener("load", () => {
  //========================
  function generateDivHello(number = 10) {
    const container = document.querySelector(".container")

    for (let i = 0; i < number; i++) {
      let div = document.createElement("div")
      div.innerText = "Hello"
      container.append(div)
    }
  }
  generateDivHello()
  //============================

  function clickDivNextRed(e) {
    let elementDiv = e.target

    while (elementDiv.nextElementSibling) {
      let nextEl = elementDiv.nextElementSibling
      nextEl.style.color = "red"
      elementDiv = nextEl
    }
  }
  const container = document.querySelector(".container")

  container.addEventListener("click", clickDivNextRed)
})
