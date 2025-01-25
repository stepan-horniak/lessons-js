window.addEventListener("load", () => {
  class Star {
    constructor(numberStar) {
      this.numberStar = numberStar
    }

    randomNumber(max = 100, min = 0) {
      return min + Math.floor(Math.random() * max)
    }

    createStar() {
      const divStar = document.createElement("div")
      const randomSize = this.randomNumber()
      divStar.style.backgroundColor = "gold"
      divStar.style.clipPath =
        "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%,79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
      divStar.style.position = "absolute"
      divStar.style.width = `${randomSize}px`
      divStar.style.height = `${randomSize}px`
      divStar.style.top = `${this.randomNumber()}%`
      divStar.style.left = `${this.randomNumber()}%`
      document.querySelector(".container").append(divStar)
      this.starEl = divStar
    }
    // animateStar() {
    //   this.createStar()
    //   let size = 0
    //   setInterval(() => {
    //     size++
    //     this.starEl.style.width = `${size}px`
    //     this.starEl.style.height = `${size}px`
    //     if (size === 50) {
    //       this.starEl.style.opacity = "0"
    //       this.starEl.style.top = `${this.randomNumber()}%`
    //       this.starEl.style.left = `${this.randomNumber()}%`
    //     }
    //     if (size === 53) {
    //       this.starEl.style.opacity = "1"
    //       size = 0
    //     }
    //   }, 100)
    // }
  }
  for (let i = 0; i < 10; i++) {
    const star = new Star()
    star.createStar()
  }
})
