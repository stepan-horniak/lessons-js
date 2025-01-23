window.addEventListener("load", () => {
  function getRandNum(max = 100, min = 1) {
    return min + Math.floor(Math.random() * (max - min))
  }

  function snow(num) {
    let container = document.querySelector(".container")

    for (let i = 0; i < num; i++) {
      let img = document.createElement("img")
      img.className = "image"
      img.setAttribute("src", "./111.avif")

      container.append(img)
    }
    let f = document.querySelectorAll(".image")
    f.forEach(
      (el) =>
        (el.style = `top:${getRandNum(
          window.innerHeight
        )}px;left:${getRandNum()}%`)
    )
    f.forEach((el) => {
      setInterval(() => {
        let top = parseInt(el.style.top)
        el.style.top = `${(top + 1) % window.innerHeight}px`
      }, getRandNum(20, 5))
    })
  }
  snow(3)
})
