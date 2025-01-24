window.addEventListener("load", () => {
  //========================
  class Loader {
    constructor(title, value) {
      this.title = title
      this.value = value
    }

    render(userContainer) {
      const container = document.querySelector(userContainer)

      const row = document.createElement("div")

      const tittleEl = document.createElement("h5")
      tittleEl.textContent = this.title
      row.append(tittleEl)
      row.style.display = "flex"
      row.style.alignItems = "center"

      const divEl = document.createElement("div")
      divEl.style.width = "100%"
      divEl.style.marginLeft = "30px"

      const divElLoading = document.createElement("div")
      divElLoading.style.height = "25px"
      divElLoading.style.backgroundColor = "red"
      divElLoading.style.width = `${this.value}%`
      divElLoading.textContent = `${this.value}%`
      divElLoading.style.display = "flex"
      divElLoading.style.justifyContent = "center"

      divEl.append(divElLoading)
      row.append(divEl)
      container.append(row)
    }
  }
  const loader = new Loader("завантажено", 40)
  loader.render(".container")
})
