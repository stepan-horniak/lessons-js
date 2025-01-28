window.addEventListener("load", () => {
  class Auto {
    constructor(container, formId, autosId, yearsId) {
      this.container = document.querySelector(container)
      this.formId = document.getElementById(formId)

      this.autosId = document.getElementById(autosId)
      this.yearsId = document.getElementById(yearsId)
      this.event()
      this.render()
    }

    event() {
      this.formId.addEventListener("change", () => this.render())
    }
    render() {
      this.container.lastChild.remove()
      const selectedAuto = this.autosId.options[this.autosId.selectedIndex]
      const priceAuto = parseInt(selectedAuto.getAttribute("price"))

      const selectedYears = this.yearsId.options[this.yearsId.selectedIndex]
      const priceYears = parseInt(selectedYears.getAttribute("price"))

      this.container.append(
        `${selectedAuto.textContent} - ${
          selectedYears.textContent
        } року ціна :${priceAuto + priceYears}$ `
      )
    }
  }
  const auto = new Auto(".container", "form", "autos", "years")
})
