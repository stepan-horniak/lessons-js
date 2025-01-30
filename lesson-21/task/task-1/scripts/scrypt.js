window.addEventListener("load", () => {
  //=========1===============
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
  //=========2=========
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
      labelEl.textContent = "2) Введіть час початку процедури :"

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

  //==========3==========

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
        return (this.wrapperTime.textContent = "3) робочий день закінчився")

      const hoursLeft = Math.floor(diff / (1000 * 60 * 60))
      diff %= 1000 * 60 * 60
      const minutesLeft = Math.floor(diff / (1000 * 60))
      const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000)

      return (this.wrapperTime.textContent = `3) До кінця робочого дня алишилось: ${hoursLeft} годин ${minutesLeft} хвилин ${secondsLeft} секунд`)
    }

    render() {
      this.container.append(this.createWrappper())
    }
  }

  const showTimeToEndWorkday = new ShowTimeToEndWorkday(".container")
  showTimeToEndWorkday.render()

  //=========8==========

  class ManySecondsPausedMuoseMovement {
    constructor(container) {
      this.container = document.querySelector(container)
      this.moveMouseTime = this.moveMouseTime.bind(this)
    }
    createWrappper() {
      const divEl = document.createElement("div")
      divEl.style.border = "3px solid black "
      divEl.style.fontSize = "25px"
      divEl.style.padding = "10px"

      divEl.append(this.calkSeconds())

      return divEl
    }
    onloadPageTime() {
      const time = Date.now()
      this.onloadTime = time
      return time
    }
    moveMouseTime() {
      const time = Date.now()
      this.moveTime = time

      this.calkSeconds()
      document.body.removeEventListener("mousemove", this.moveMouseTime)
      this.container.append(this.createWrappper())
      return time
    }

    calkSeconds() {
      let time = this.moveTime - this.onloadTime

      return `8) пройшло ${Math.floor(time / 1000)} секунди`
    }
    render() {
      this.onloadPageTime()
      document.body.addEventListener("mousemove", this.moveMouseTime)
    }
    //========================
  }

  const manySecondsPausedMuoseMovement = new ManySecondsPausedMuoseMovement(
    ".container"
  )
  manySecondsPausedMuoseMovement.render()
  //==========12==========

  class CompareTimeSortBubleAndInsert {
    constructor(container) {
      this.container = document.querySelector(container)
    }

    getRandomNumber(max = 800, min = 1) {
      return min + Math.floor(Math.random() * max)
    }
    getArrayNumbers(number = 1000) {
      const arr = []
      for (let i = 0; i < number; i++) {
        arr.push(this.getRandomNumber())
      }
      return arr
    }
    getTimeNow() {
      return performance.now()
    }
    createWrapper() {
      const divEl = document.createElement("div")
      divEl.style.border = "3px solid black "
      divEl.style.fontSize = "25px"
      divEl.style.padding = "10px"

      this.wrapper = divEl
      return divEl
    }
    sortInsert(arr) {
      for (let i = 1; i < arr.length; i++) {
        let key = arr[i]
        let j
        for (j = i - 1; j >= 0 && arr[j] > key; j--) {
          arr[j + 1] = arr[j]
        }

        arr[j + 1] = key
      }
      return arr
    }
    sortBuble(arr) {
      let changing = true
      let i
      while (changing) {
        changing = false
        for (i = 0; i < arr.length - 1; i++) {
          if (arr[i] > arr[i + 1]) {
            const r = arr[i + 1]
            arr[i + 1] = arr[i]
            arr[i] = r
            changing = true
          }
        }
      }
    }
    timesSortBuble() {
      const arr = [...this.arr]
      const startTimeBuble = this.getTimeNow()

      this.sortBuble(arr)
      const endTimeBuble = this.getTimeNow()

      const divEl = document.createElement("div")
      divEl.textContent = `12) час сортування бульбашкою ${
        endTimeBuble - startTimeBuble
      } мілісекунд`
      return divEl
    }
    timesSortInsert() {
      const arr = [...this.arr]
      const startTimeInsert = this.getTimeNow()

      this.sortInsert(arr)
      const engTimeInsert = this.getTimeNow()

      const divEl = document.createElement("div")
      divEl.textContent = `час сортування вставкою ${
        engTimeInsert - startTimeInsert
      } мілісекунд`

      return divEl
    }
    timesSortQuicksort() {
      const arr = [...this.arr]
      const startTimeInsert = this.getTimeNow()

      arr.sort((a, b) => a - b)
      const engTimeInsert = this.getTimeNow()

      const divEl = document.createElement("div")
      divEl.textContent = `час сортування Quicksort ${
        engTimeInsert - startTimeInsert
      } мілісекунд`

      return divEl
    }

    render() {
      const start = this.getTimeNow()
      this.createWrapper()
      this.arr = this.getArrayNumbers()
      this.wrapper.append(this.timesSortBuble())
      this.wrapper.append(this.timesSortInsert())
      this.wrapper.append(this.timesSortQuicksort())

      const end = this.getTimeNow()

      const divEl = document.createElement("div")
      divEl.textContent = `загальний час класу ${end - start} мілісекунд`
      this.wrapper.append(divEl)

      this.container.append(this.wrapper)
    }
    //==========
  }
  const compareTimeSortBubleAndInsert = new CompareTimeSortBubleAndInsert(
    ".container"
  )
  compareTimeSortBubleAndInsert.render()
  //=====================

  //============
})
