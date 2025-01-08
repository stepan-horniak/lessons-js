"usestrict"
if (confirm("запускаємо код")) {
  const userNum = 10
  function getRandomNumber(min = 1, max = 10000) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }
  function getArrayRandomNumbers(userNumber) {
    let arr = []
    for (let i = 0; i < userNumber; i++) {
      arr.push(getRandomNumber())
    }
    return arr
  }
  const arrayRandomNumbers = getArrayRandomNumbers(userNum)
  console.log(arrayRandomNumbers)

  //=========1================

  const newArrayGreaterThan1000 = arrayRandomNumbers.filter((el) => el > 1000)
  // ========2==============

  function getArrayGreaterThan1000Index(array) {
    let arrayIndex = []
    for (let i = 0; i < array.length; i++) {
      array[i] > 1000 ? arrayIndex.push(i) : null
    }
    return arrayIndex
  }
  const newGreaterThan1000Index =
    getArrayGreaterThan1000Index(arrayRandomNumbers)

  // ==========3===============
  const greaterThanPreviousValue = arrayRandomNumbers.filter(
    (el, index, arr) => index > 0 && el > arr[index - 1]
  )
  // ===========4================

  const max = Math.max(...arrayRandomNumbers)
  const valuePricesPercentagesRelationMaximum = arrayRandomNumbers.map((el) => {
    return (el / max) * 100
  })
  // ==========5==========
  const countNumberPriceChanges = arrayRandomNumbers.filter((el, index, arr) =>
    el > 0 && el !== arr[index - 1] ? el : null
  )

  // ===========6=============

  const determinePriceLessThan1000 = arrayRandomNumbers.some((el) => el < 1000)

  // ===========7================

  const determineAllPricesGreater1000 = arrayRandomNumbers.every(
    (el) => el > 1000
  )

  // ===========8==============

  const countArrayGreaterThan1000 = (arr) => {
    let count = 0
    for (const element of arr) {
      if (element > 1000) {
        count++
      }
    }
    return count
  }

  // ===========9================

  const summGreaterThan1000 = arrayRandomNumbers.reduce(
    (prevValue, el) => (el > 1000 ? (prevValue += el) : prevValue),
    0
  )

  // ==========10===========

  const findFirstPriceGreaterThan1000 = arrayRandomNumbers.find(
    (el) => el > 1000
  )

  // ===========11=========

  const findIndexFirstPriceGreaterThan1000 = arrayRandomNumbers.findIndex(
    (el) => el > 1000
  )

  //============12=============

  const findlastPriceGreaterThan1000 = arrayRandomNumbers.findLast(
    (el) => el > 1000
  )

  //============13=============
  const findIndexlastPriceGreaterThan1000 = arrayRandomNumbers.findLastIndex(
    (el) => el > 1000
  )
  document.querySelector(".answer").innerHTML = `<ol>
  <li>більші за 1000 : ${newArrayGreaterThan1000}</li>
  <li>номери тих що більші за 1000 : ${newGreaterThan1000Index}</li>
  <li>список з тих цін, які більші за попереднє значення : ${greaterThanPreviousValue}</li>
  <li>значення цін у відсотках стосовно
максимального : ${valuePricesPercentagesRelationMaximum}</li>
  <li>Підрахувати кількість змін цін : ${countNumberPriceChanges.length}
</li>
  <li>Визначити, чи є ціна, що менше 1000 : 
${determinePriceLessThan1000}</li>
  <li>Визначати, чи усі ціни більше за 1000 : ${determineAllPricesGreater1000}</li>
  <li>Підрахувати кількість цін, що більше за 1000
 : ${countArrayGreaterThan1000(arrayRandomNumbers)}</li>
  <li>Підрахувати суму цін, що більше за 1000
 : ${summGreaterThan1000}</li>
  <li>Знайти першу ціну, що більше за 1000 : ${findFirstPriceGreaterThan1000}</li>
  <li>Знайти індекс першої ціни, що більше за 1000 : ${findIndexFirstPriceGreaterThan1000}</li>
  <li>Знайти останню ціну, що більше за 1000 : ${findlastPriceGreaterThan1000}</li>
  <li>Знайти індекс останньої ціни, що більше за 1000
 : ${findIndexlastPriceGreaterThan1000}</li>

  </ol>`
}
