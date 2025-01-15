"use strict"
class Shot {
  constructor(arrRabbit) {
    this.arrRabbit = arrRabbit
  }

  showPlayingField() {
    let field = ``
    for (let i = 0; i < this.arrRabbit.length; i++) {
      field += `<div class="field"><span style ='visibility: hidden;'>${this.arrRabbit[i]}</span></div>`
    }

    return field
  }
  shot() {
    const field = this.showPlayingField()
    let click = document.addEventListener("click", (e) => {
      if (
        e.target.textContent === "1" &&
        e.target.classList.contains("field")
      ) {
        e.target.style = "background-color: green;"
      } else if (e.target.classList.contains("field"))
        e.target.style = "background-color: red;"
    })
  }
}
const arrRabbit = [1, 0, 0, 0, 1, 0, 0]
const shot = new Shot(arrRabbit)
document.querySelector(
  ".answer"
).innerHTML = `${shot.showPlayingField()} стріляй`
shot.shot()
