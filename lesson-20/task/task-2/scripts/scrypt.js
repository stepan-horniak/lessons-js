window.addEventListener("load", () => {
  class Star {
    constructor(container, numberStar) {
      this.container = container
      this.numberStar = numberStar
      this.stars = []
    }

    randomNumber(max = 100, min = 0) {
      return min + Math.floor(Math.random() * (max - min + 1))
    }

    createStar() {
      const divStar = document.createElement("div")
      const randomSize = this.randomNumber(10, 50)
      divStar.style.backgroundColor = "gold"
      divStar.style.clipPath =
        "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
      divStar.style.position = "absolute"
      divStar.style.width = `${randomSize}px`
      divStar.style.height = `${randomSize}px`
      divStar.style.top = `${this.randomNumber()}%`
      divStar.style.left = `${this.randomNumber()}%`
      divStar.style.opacity = "1"
      this.container.append(divStar)

      return divStar
    }

    animateStar(star) {
      let size = this.randomNumber(10, 30)
      let growing = true

      const interval = setInterval(() => {
        if (growing) {
          size++
          if (size === 40) {
            growing = false
            star.style.opacity = "0"
          }
        } else {
          size--
          if (size === 5) {
            growing = true
            star.style.opacity = "1"
            star.style.top = `${this.randomNumber()}%`
            star.style.left = `${this.randomNumber()}%`
          }
        }
        star.style.width = `${size}px`
        star.style.height = `${size}px`
      }, this.randomNumber(50, 130))

      return interval
    }

    startAnimation() {
      for (let i = 0; i < this.numberStar; i++) {
        const star = this.createStar()
        this.stars.push({
          element: star,
          interval: this.animateStar(star),
        })
      }
    }
  }

  const container = document.querySelector(".container")
  const star = new Star(container, 100)
  star.startAnimation()
})
