"usestrict"
addEventListener("load", function () {
  function arithmeticProgression(firstEl, difference, userNumber) {
    const arr = [],
      iterationNumber = userNumber * difference + firstEl

    for (let i = firstEl; i < iterationNumber; i += difference) {
      arr.push(i)
    }
    return arr
  }

  let firstElement = 1,
    difference = 3,
    userNumIteration = 20

  document.querySelector(".answer").insertAdjacentHTML(
    "beforeend",
    `
    
    <div>починаючи з : ${firstElement}</div>
    <div>крок : ${difference}</div>
    <div>кількість ітерацій : ${userNumIteration}</div>
    <div>результат : ${arithmeticProgression(
      firstElement,
      difference,
      userNumIteration
    )}
    </div>`
  )
})
