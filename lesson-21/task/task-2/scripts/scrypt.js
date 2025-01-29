window.addEventListener("load", () => {
  //========================

  class Client {
    constructor(container, users) {
      this.container = document.querySelector(container)

      this.users = [...users]
    }

    createWrapper() {
      const divEl = document.createElement("div")
      divEl.style.position = "relative"
      divEl.style.fontSize = "25px"
      divEl.style.border = "3px solid black"
      divEl.style.display = "flex"
      divEl.style.flexDirection = "column"
      divEl.append(this.createSelectClient())
      divEl.append(this.createInputAdd())
      divEl.append(this.createInputTake())
      divEl.append(this.createButtonInfo())
      this.wrapper = divEl
      return divEl
    }
    createSelectClient() {
      const divEl = document.createElement("div")
      divEl.style.fontSize = "25px"
      divEl.style.display = "flex"
      divEl.style.gap = "20px"

      const spanEl = document.createElement("div")
      spanEl.textContent = "оберіть клієнта"

      const selectEl = document.createElement("select")
      selectEl.style.fontSize = "25px"

      for (const element of users) {
        const optionEl = document.createElement("option")
        optionEl.value = element.fullName
        optionEl.textContent = element.fullName
        selectEl.append(optionEl)
      }

      this.selectElement = selectEl
      divEl.append(spanEl)
      divEl.append(selectEl)

      return divEl
    }
    createInputAdd() {
      const ladelEl = document.createElement("label")
      ladelEl.textContent = "введіть суму поповнення :"

      const inputEl = document.createElement("input")
      inputEl.style.fontSize = "25px"
      inputEl.setAttribute("type", "number")

      this.inputAdd = inputEl
      ladelEl.append(inputEl)

      return ladelEl
    }
    createInputTake() {
      const ladelEl = document.createElement("label")
      ladelEl.textContent = "введіть суму зняття :"

      const inputEl = document.createElement("input")
      inputEl.style.fontSize = "25px"
      inputEl.setAttribute("type", "number")

      this.inputTake = inputEl
      ladelEl.append(inputEl)

      return ladelEl
    }
    createButtonInfo() {
      const buttonEl = document.createElement("button")
      buttonEl.textContent = "подивитись інформацію клієнта"
      buttonEl.style.fontSize = "25px"

      this.buttonEl = buttonEl
      return buttonEl
    }
    //==================

    addMoney() {
      let money = parseInt(this.inputAdd.value)
      if (money > 0) {
        users.forEach((el) => {
          if (el.fullName === this.selectElement.value) {
            el.accountBalance += money
          }
        })
        this.inputAdd.value = ""
      }
    }
    takeMoney() {
      let money = parseInt(this.inputTake.value)
      if (money > 0) {
        users.forEach((el) => {
          if (el.fullName === this.selectElement.value) {
            el.accountBalance -= money
          }
        })
        this.inputTake.value = ""
      }
    }

    toString() {
      const divEl = document.createElement("div")
      divEl.className = "show-user"
      users.forEach((el) => {
        if (el.fullName === this.selectElement.value) {
          divEl.textContent = `${el.fullName} баланс: ${el.accountBalance} id: ${el.ID}`
        }
      })
      const element = this.container.querySelector(".show-user")
      if (element) {
        element.remove()
      }
      return this.container.append(divEl)
    }
    render() {
      this.container.append(this.createWrapper())

      this.inputAdd.onchange = this.addMoney.bind(this)
      this.inputTake.onchange = this.takeMoney.bind(this)
      this.buttonEl.addEventListener("click", this.toString.bind(this)) // = this.toString.bind(this)
    }
  }

  //================
  const users = [
    {
      ID: "12345",
      fullName: "Іванов Іван Іванович",
      accountBalance: 5000,
      interestRate: 15,
    },
    {
      ID: "12346",
      fullName: "Петров Петро Петрович",
      accountBalance: 6000,
      interestRate: 14,
    },
    {
      ID: "12347",
      fullName: "Сидоров Сидір Сидорович",
      accountBalance: 7000,
      interestRate: 13,
    },
    {
      ID: "12348",
      fullName: "Михайлов Михайло Михайлович",
      accountBalance: 8000,
      interestRate: 16,
    },
    {
      ID: "12349",
      fullName: "Тимофіїв Тимофій Тимофійович",
      accountBalance: 9000,
      interestRate: 12,
    },
    {
      ID: "12350",
      fullName: "Коваленко Костянтин Костянтинович",
      accountBalance: 10000,
      interestRate: 11,
    },
    {
      ID: "12351",
      fullName: "Григоренко Григорій Григорович",
      accountBalance: 11000,
      interestRate: 17,
    },
    {
      ID: "12352",
      fullName: "Бондаренко Богдан Богданович",
      accountBalance: 12000,
      interestRate: 18,
    },
    {
      ID: "12353",
      fullName: "Шевченко Сергій Сергійович",
      accountBalance: 13000,
      interestRate: 10,
    },
    {
      ID: "12354",
      fullName: "Петренко Олександр Олександрович",
      accountBalance: 14000,
      interestRate: 9,
    },
  ]
  const client = new Client(".container", users)
  client.render()

  //=============
  class GoldenClient extends Client {
    constructor(container, users) {
      super(container, users)
    }
    createDivInterestRate() {
      const divEl = document.createElement("div")
      divEl.className = "interest-rate"

      this.users.forEach((el) => {
        if (el.fullName === this.selectElement.value) {
          divEl.textContent = `процентна ставка = ${el.interestRate} %`
        }
      })
      if (this.wrapper.lastElementChild.classList.contains("interest-rate")) {
        this.wrapper.lastElementChild.remove()
      }
      const children = this.wrapper.children
      this.wrapper.insertBefore(divEl, children[children.length - 1])
    }
    createButtonAllClient() {
      const buttonEl = document.createElement("button")

      buttonEl.style.position = "absolute"
      buttonEl.style.top = "40px"
      buttonEl.style.right = "20px"
      buttonEl.style.padding = "10px"
      buttonEl.style.fontSize = "25px"

      buttonEl.textContent = "список усіх клієнтів"

      this.wrapper.append(buttonEl)
      this.buttonShowClient = buttonEl
    }
    showClient() {
      const listEl = document.createElement("ul")
      listEl.className = "client-list"

      this.users.forEach((el) => {
        const itemEl = document.createElement("li")
        itemEl.textContent = `${el.fullName} баланс: ${el.accountBalance} процентна ставка: ${el.interestRate} id : ${el.ID}`
        listEl.append(itemEl)
      })
      const list = this.container.querySelector(".client-list")
      if (list) {
        list.remove()
      }
      this.container.append(listEl)
    }
    renderGoldenClient() {
      super.render()
      this.createDivInterestRate()
      this.createButtonAllClient()
      this.buttonShowClient.onclick = this.showClient.bind(this)
    }

    //===============
  }
  const goldenClient = new GoldenClient(".container", users)
  goldenClient.renderGoldenClient()
  //===================
})
