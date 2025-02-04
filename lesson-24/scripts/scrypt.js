window.addEventListener("load", () => {
  //===================================
  class DataApiDogs {
    constructor(url) {
      this.url = url
    }

    async fetchUrl() {
      try {
        const response = await fetch(this.url)
        if (response.ok) {
          const data = await response.json()
          return data.message
        } else throw new Error("error response")
      } catch (error) {
        console.log(error.message)
      }
    }
  }

  //===================================================
  class CreatePage {
    constructor() {
      this.wrapper = null
    }

    createWrapper() {
      const divEl = document.createElement("div")
      divEl.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 15px;
      background-color: #efd4b1;
      `
      this.wrapper = divEl
    }
    createButton() {
      const buttonEl = document.createElement("button")
      buttonEl.textContent = "тисни  щоб додати"
      buttonEl.style.backgroundColor = "rgb(239, 146, 24)"
      buttonEl.style.height = "40px"
      buttonEl.style.fontSize = "25px"
      buttonEl.style.borderRadius = "15px"

      this.buttonEl = buttonEl
    }

    createImg(url) {
      const imgEl = document.createElement("img")
      imgEl.className = "image"
      imgEl.setAttribute("src", url)
      imgEl.style.cssText = `
       transition: 0.3s;
       max-height: 200px;
       width: auto;
       object-fit: cover;
       border-radius: 15px;
       display: block;
       `
      this.wrapper.append(imgEl)
    }
    async updateList() {
      const imgUrl = await this.api.fetchUrl()
      this.createImg(imgUrl)
    }

    async createImage() {
      for (let i = 0; i < this.numberImg; i++) {
        const imgUrl = await this.api.fetchUrl()
        this.createImg(imgUrl)
      }
    }

    render(container, numberImg, api) {
      this.api = api
      this.numberImg = numberImg
      this.currentContainer = document.querySelector(container)

      this.createWrapper()
      this.createButton()
      this.createImage()
      this.wrapper.append(this.buttonEl)

      this.currentContainer.append(this.wrapper)
      this.buttonEl.onclick = this.updateList.bind(this)
    }
  }
  const dataApiDogs = new DataApiDogs("https://dog.ceo/api/breeds/image/random")
  const createPage = new CreatePage()
  createPage.render(".container", 5, dataApiDogs)
  //============================
})
