"usestrict"
addEventListener("load", function () {
  if (confirm("запускаємо код??")) {
    function getRandomNum(min = 1, max = 10000) {
      return min + Math.floor(Math.random() * (max - min) + 1)
    }
    function fillingArray(quantity) {
      for (let i = 0; i < quantity; i++) {
        randomNumbers.push(getRandomNum())
      }
    }
    let randomNumbers = []
    const userNumber = parseInt(
      prompt("введіть кількість рандомних чисел", "10")
    )
    fillingArray(userNumber)
    console.log(randomNumbers)

    //=============11111================
    function greaterThan1000() {
      return randomNumbers.filter((el) => el > 1000)
    }

    //=============2222================
    function numberGreaterThan1000() {
      let arr = []
      randomNumbers.map((el, index) => (el > 1000 ? arr.push(index) : null))
      return arr
    }

    //=============3333================
    function greaterPreviousValue() {
      let arr = []
      randomNumbers.reduce((prevValue, el, index, array) => {
        el > array[index - 1] ? arr.push(el) : prevValue
      }, 0)
      return arr
    }

    //=============4444================
    function pricesInPercentagesInRelationMaximum() {
      let maximumPrice = Math.max(...randomNumbers)
      let arr = randomNumbers.map((el) => {
        return (el / maximumPrice) * 100
      })

      return arr
    }
    let fixedPricesInPercentagesInRelationMaximum =
      pricesInPercentagesInRelationMaximum().map((el) => el.toFixed())
    //=============5555================
    function countPriceChanges() {
      let count = 0
      randomNumbers.reduce((prevValue, el, index, arr) => {
        el !== arr[index - 1] ? count++ : prevValue
      })

      return count
    }
    //=============6666================
    function priceLess1000() {
      return randomNumbers.some((el) => el < 1000)
    }
    //=============7777================

    function everyonePriceMore1000() {
      return randomNumbers.every((el) => el > 1000)
    }
    //=============8888================
    function countNumberPriceMore1000() {
      count = 0
      randomNumbers.forEach((el) => (el > 1000 ? count++ : null))
      return count
    }
    //=============9999================
    function getSumNumberMore1000() {
      return randomNumbers.reduce(
        (prevValue, el) => (el > 1000 ? el + prevValue : prevValue),
        0
      )
    }
    //=============10101010================
    function firstPriceMore1000() {
      return randomNumbers.find((el) => el > 1000)
    }

    //=============11111111================
    function firstIndexPriceMore1000() {
      return randomNumbers.findIndex((el) => el > 1000)
    }

    //=============12121212================
    function lastPriceMore1000() {
      return randomNumbers.findLast((el) => el > 1000)
    }

    //=============13131313================
    function lastIndexPriceMore1000() {
      return randomNumbers.findLastIndex((el) => el > 1000)
    }

    document.querySelector(".answer").insertAdjacentHTML(
      "beforeend",
      `
    <h1 style='font-size:40px;text-align: center;'>рандомний масив <br> ${randomNumbers}</h1>
    <ol>
    <li>${greaterThan1000()}</li>
    <li>${numberGreaterThan1000()}</li>
    <li>${greaterPreviousValue()}</li>
    <li>${fixedPricesInPercentagesInRelationMaximum}</li>
    <li>${countPriceChanges()}</li>
    <li>${priceLess1000()}</li>
    <li>${everyonePriceMore1000()}</li>
    <li>${countNumberPriceMore1000()}</li>
    <li>${getSumNumberMore1000()}</li>
    <li>${firstPriceMore1000()}</li>
    <li>${firstIndexPriceMore1000()}</li>
    <li>${lastPriceMore1000()}</li>
    <li>${lastIndexPriceMore1000()}</li>


    </ol>
    `
    )
  }
})
