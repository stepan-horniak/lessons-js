window.addEventListener("load", () => {
  class Star {
    constructor(container) {
      this.container = container
      this.createStar()
    }

    createStar() {
      const divStar = document.createElement("div")
      divStar.style.cssText = `
        width: 30px;
        height: 30px;
        background-color: gold;
        clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 
                           79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        position: absolute;
        top: ${this.randomPosition()}%;
        left: ${this.randomPosition()}%;
        transition: top 0.5s, left 0.5s, width 0.5s, height 0.5s, opacity 0.5s;
        opacity: 1;
      `
      this.container.append(divStar)
      this.starEl = divStar
      this.animateStar()
    }

    randomPosition(max = 100, min = 0) {
      return min + Math.floor(Math.random() * max)
    }

    animateStar() {
      let size = 30
      this.starEl.style.opacity = "0"

      setTimeout(() => {
        size = 30
        this.starEl.style.top = `${this.randomPosition()}%`
        this.starEl.style.left = `${this.randomPosition()}%`
        this.starEl.style.width = `${size}px`
        this.starEl.style.height = `${size}px`

        this.starEl.style.opacity = "1"
      }, this.randomPosition(1000, 10))
    }
  }

  const container = document.createElement("div")
  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #282c34;
    z-index: -1;
  `
  document.body.append(container)

  new Star(container)
})
