window.addEventListener("load", () => {
  class Bayraktar {
    constructor(container, imgSrcTank, imgSrcBoom) {
      this.container = document.querySelector(container)
      this.imgSrcTank = imgSrcTank
      this.imgSrcBoom = imgSrcBoom
      this.tanks = []
      this.interval
    }

    containerStyle() {
      this.container.style.backgroundColor = "rgb(58, 19, 19)"
      this.container.style.position = "fixed"
      this.container.style.width = "100%"
      this.container.style.height = "100%"
      this.container.style.top = "0"
      this.container.style.left = "0"
      this.container.style.zIndex = "1"
    }

    run(tank) {
      let run = 0

      const tankInterval = setInterval(() => {
        run++
        tank.style.top = run + "px"
        if (parseFloat(tank.style.top) === window.innerHeight) {
          tank.style.left = `${this.randomNumber()}%`
          run = 0
        }
      }, this.randomNumber(30, 1))

      return tankInterval
    }

    randomNumber(max = 100, min = 0) {
      return min + Math.floor(Math.random() * max)
    }

    createTank() {
      let img = document.createElement("img")
      img.setAttribute("src", this.imgSrcTank)
      img.style.width = "70px"
      img.style.position = "absolute"
      img.style.left = `${this.randomNumber()}%`
      this.container.append(img)
      return img
    }

    createBoom() {
      let img = document.createElement("img")
      img.setAttribute("src", this.imgSrcBoom)
      img.style.width = "70px"
      img.style.position = "absolute"
      this.container.append(img)
      return img
    }

    boom(e) {
      if (e.target.tagName === "IMG") {
        const tankElement = e.target
        const tank = this.tanks.find((t) => t.element === tankElement)

        if (tank) {
          clearInterval(tank.interval)

          const boomElement = this.createBoom()
          boomElement.style.top = `${parseFloat(
            getComputedStyle(tankElement).top
          )}px`
          boomElement.style.left = `${parseFloat(
            getComputedStyle(tankElement).left
          )}px`

          tankElement.remove()

          setTimeout(() => {
            boomElement.remove()
          }, 1000)
        }
      }
    }

    render(numberTank) {
      this.containerStyle()
      for (let i = 0; i < numberTank; i++) {
        const tank = this.createTank()
        const interval = this.run(tank)
        this.tanks.push({ element: tank, interval })
      }
      this.container.addEventListener("click", this.boom.bind(this))
    }
  }

  const bayraktar = new Bayraktar(".container", "./tank.png", "./boom.png")
  bayraktar.render(5)
})
