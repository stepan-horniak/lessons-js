window.addEventListener("load", () => {
  //========================
  class Bank {
    constructor(container, users) {
      this.container = document.querySelector(container)
      this.users = [...users]
    }

    showClientList(isGolden = true) {
      const listEl = document.createElement("ul")
      listEl.setAttribute("id", "client")

      this.users.forEach((el) => {
        if (el.isGolden === isGolden) {
          const itemEl = document.createElement("li")

          itemEl.textContent = `${el.fullName} баланс :${el.accountBalance} крeдитний ліміт :${el.creditLimit} процентна ставка :${el.interestRate} id= ${el.ID}`

          listEl.append(itemEl)
        }
      })
      this.clearElement("#client")
      this.container.append(listEl)
    }

    totalSumMoney() {
      const divEl = document.createElement("div")
      divEl.className = "total-sum"

      let sum = this.users.reduce(
        (prevVal, el) => el.accountBalance + prevVal,
        0
      )

      this.clearElement(".total-sum")
      divEl.textContent = "загальна сума всіх грошей : " + sum

      this.container.append(divEl)
    }
    createButton(title) {
      const buttonEl = document.createElement("button")
      buttonEl.style.padding = "10px"
      buttonEl.textContent = title
      this.container.append(buttonEl)
      return buttonEl
    }
    clearElement(selector) {
      const element = this.container.querySelector(selector)
      if (element) {
        element.remove()
      }
    }
    showButton() {
      this.clientBtn = this.createButton("простi клієнти")
      this.goldenClientBtn = this.createButton("GoldenClient")
      this.totalSumBtn = this.createButton("загальна сума грошей на рахунку")
    }
    render() {
      this.showButton()
      this.clientBtn.onclick = () => this.showClientList(false)
      this.goldenClientBtn.onclick = () => this.showClientList(true)
      this.totalSumBtn.onclick = () => this.totalSumMoney()
    }
  }

  //===================
  const users = [
    {
      ID: "10001",
      fullName: "Іванов Іван Іванович",
      accountBalance: 15000,
      creditLimit: 10000,
      interestRate: 15,
      isGolden: false,
    },
    {
      ID: "10002",
      fullName: "Петров Петро Петрович",
      accountBalance: 12000,
      creditLimit: 15000,
      interestRate: 12,
      isGolden: true,
    },
    {
      ID: "10003",
      fullName: "Сидоров Сидір Сидорович",
      accountBalance: 7000,
      creditLimit: 11000,
      interestRate: 14,
      isGolden: false,
    },
    {
      ID: "10004",
      fullName: "Михайлов Михайло Михайлович",
      accountBalance: 3000,
      creditLimit: 5000,
      interestRate: 10,
      isGolden: false,
    },
    {
      ID: "10005",
      fullName: "Тимофіїв Тимофій Тимофійович",
      accountBalance: 9000,
      creditLimit: 20000,
      interestRate: 8,
      isGolden: true,
    },
    {
      ID: "10006",
      fullName: "Коваленко Костянтин Костянтинович",
      accountBalance: 15000,
      creditLimit: 25000,
      interestRate: 7,
      isGolden: true,
    },
    {
      ID: "10007",
      fullName: "Григоренко Григорій Григорович",
      accountBalance: 8000,
      creditLimit: 12000,
      interestRate: 9,
      isGolden: false,
    },
    {
      ID: "10008",
      fullName: "Бондаренко Богдан Богданович",
      accountBalance: 6000,
      creditLimit: 10000,
      interestRate: 11,
      isGolden: false,
    },
    {
      ID: "10009",
      fullName: "Шевченко Сергій Сергійович",
      accountBalance: 14000,
      creditLimit: 30000,
      interestRate: 6,
      isGolden: true,
    },
    {
      ID: "10010",
      fullName: "Петренко Олександр Олександрович",
      accountBalance: 11000,
      creditLimit: 22000,
      interestRate: 7,
      isGolden: true,
    },
  ]
  const bank = new Bank(".container", users)
  bank.render()
  //=======================
})
