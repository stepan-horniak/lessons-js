window.addEventListener("load", () => {
  //========================
  class SwovTimeUserWebsite {
    constructor(container) {
      this.container = document.querySelector(container)
    }
    createWrappper() {
      const divEl = document.createElement("div")

      divEl.style.fontSize = "25px"
      divEl.style.position = "fixed"
      divEl.style.top = "20px"
      divEl.style.left = "20px"
      divEl.style.backgroundColor = "#5c4b48"
      divEl.style.color = "white"
      divEl.style.padding = "10px"

      this.wrapperTime = divEl
      this.showTime()
      return divEl
    }
    showTime() {
      this.wrapperTime.textContent = "0 : 0"

      const startTime = new Date()

      setInterval(() => {
        this.wrapperTime.textContent = ""

        const now = new Date()
        const diff = now - startTime
        const resultMinutes = Math.floor(diff / 1000 / 60)
        const resultSeconds = Math.floor((diff / 1000) % 60)
        this.wrapperTime.textContent = `${resultMinutes} : ${resultSeconds}`
      }, 1000)
    }
    render() {
      this.container.append(this.createWrappper())
    }
  }
  const swovTimeUserWebsite = new SwovTimeUserWebsite(".container")
  swovTimeUserWebsite.render()
  //==================
  class ShowTimeStartProcedures {
    constructor(container) {
      this.container = document.querySelector(container)
      this.hasExecuted = false
    }

    createWrappper() {
      const divEl = document.createElement("div")
      divEl.style.border = "3px solid black "
      divEl.style.fontSize = "25px"
      divEl.style.padding = "10px"

      this.wrapperTime = divEl
      divEl.append(this.userTime())

      return divEl
    }

    currentTime() {
      const currentDate = new Date()
      const currentHours = currentDate.getHours()
      const currentMinutes = currentDate.getMinutes()
      this.currentTimeInMinutes = currentHours * 60 + currentMinutes
    }

    userInfo() {
      const value = this.inputEl.value
      this.checkIfProcedureIsActive(value)
    }

    checkIfProcedureIsActive(startTime) {
      const [startHours, startMinutes] = startTime.split(":").map(Number)
      const startTimeInMinutes = startHours * 60 + startMinutes
      const procedureEndTime = startTimeInMinutes + 30

      let divEl = document.createElement("div")

      if (
        this.currentTimeInMinutes >= startTimeInMinutes &&
        this.currentTimeInMinutes <= procedureEndTime
      ) {
        divEl.textContent = "Процедура ще триває"
        console.log("Процедура ще триває")
      } else {
        divEl.textContent = "Процедура завершена"

        console.log("Процедура завершена")
      }
      if (this.wrapperTime.lastElementChild.tagName === "DIV") {
        this.wrapperTime.lastElementChild.remove()
      }
      this.wrapperTime.append(divEl)
    }

    userWrite() {
      if (this.inputEl.value.length === 2 && !this.hasExecuted) {
        this.inputEl.value += ":"
        this.hasExecuted = true
      }

      if (this.inputEl.value.length === 3) {
        this.hasExecuted = false
      }

      if (isNaN(this.inputEl.value) || this.inputEl.value.length <= 2) {
        this.inputEl.style.color = "black"
      } else {
        this.inputEl.style.color = "red"
      }
    }

    userTime() {
      let labelEl = document.createElement("label")
      labelEl.textContent = "Введіть час початку процедури :"

      let inputEl = document.createElement("input")
      inputEl.style.fontSize = "25px"
      inputEl.setAttribute("type", "text")
      inputEl.setAttribute("maxlength", "5")
      this.inputEl = inputEl
      labelEl.append(inputEl)
      return labelEl
    }

    render() {
      this.container.append(this.createWrappper())
      this.currentTime()
      this.inputEl.oninput = this.userWrite.bind(this)
      this.inputEl.onchange = this.userInfo.bind(this)
    }
  }
  const showTimeStartProcedures = new ShowTimeStartProcedures(".container")
  showTimeStartProcedures.render()

  //====================

  class ShowTimeToEndWorkday {
    constructor(container) {
      this.container = document.querySelector(container)
    }
    createWrappper() {
      const divEl = document.createElement("div")
      divEl.style.border = "3px solid black "
      divEl.style.fontSize = "25px"
      divEl.style.padding = "10px"

      this.wrapperTime = divEl
      this.timeIsLeft()
      return divEl
    }

    timeIsLeft() {
      const now = new Date()
      const endTime = new Date()
      endTime.setHours(17, 0, 0, 0)

      let diff = endTime - now

      if (diff <= 0)
        return (this.wrapperTime.textContent = "робочий день закінчився")

      const hoursLeft = Math.floor(diff / (1000 * 60 * 60))
      diff %= 1000 * 60 * 60
      const minutesLeft = Math.floor(diff / (1000 * 60))
      const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000)

      return (this.wrapperTime.textContent = `До кінця робочого дня алишилось: ${hoursLeft} годин ${minutesLeft} хвилин ${secondsLeft} секунд`)
    }

    render() {
      this.container.append(this.createWrappper())
    }
  }

  const showTimeToEndWorkday = new ShowTimeToEndWorkday(".container")
  showTimeToEndWorkday.render()

  //===================
})
