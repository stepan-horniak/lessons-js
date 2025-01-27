window.addEventListener("load", () => {
  //========================

  class Form {
    constructor(formId) {
      this.formId = document.getElementById(formId)
      this.clickForm()
    }

    changeValue(e) {
      let element = e.target
      if (element.tagName === "INPUT") {
        element.value = 0
      }
    }
    clickForm() {
      this.formId.addEventListener("click", (e) => this.changeValue(e))
    }
  }

  const form = new Form("form")
})
