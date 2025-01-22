"use strict"
const wishlist = [
  "Подорож до Японії",
  "Купити новий смартфон",
  "Навчитися грати на гітарі",
  "Відвідати Париж",
  "Вивчити нову мову",
  "Купити велосипед",
  "Почати займатися спортом",
  "Вивести бізнес в онлайн",
]

class GetThreeRandomWish {
  #page = document.querySelector(".answer")

  constructor(arrayWish) {
    this.arrayWish = arrayWish
  }
  getRandomNumberList() {
    return Math.floor(Math.random() * this.arrayWish.length)
  }
  getThreeRandomWish() {
    for (let i = 0; i < 3; i++) {
      let div = document.createElement("div")
      div.textContent = wishlist[this.getRandomNumberList()]
      this.#page.append(div)
    }
  }
}

window.onload = () => {
  const getThreeRandomWish = new GetThreeRandomWish(wishlist)
  getThreeRandomWish.getThreeRandomWish()
}
