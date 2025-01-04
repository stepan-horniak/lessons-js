"usestrict"
addEventListener("load", function () {
  let numbersAuto = [
    "aa4353oa",
    "ao4245on",
    "n423lf",
    "f432fd",
    "aa32aa",
    "s34h",
  ]
  function countStartWithA(array) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
      if (array[i][0] === "a") {
        count++
      }
    }

    return count
  }

  function countFirstLastLettersMatch(array) {
    count = 0
    for (let i = 0; i < array.length; i++) {
      let firstElement = numbersAuto[i][0]
      let lastElement = numbersAuto[i][numbersAuto[i].length - 1]

      if (firstElement === lastElement) {
        count++
      }
    }
    return count
  }
  function countMoreFiveCharacters(array) {
    let count = 0
    for (let index = 0; index < array.length; index++) {
      if (array[index].length > 5) {
        count++
      }
    }

    return count
  }
  document.querySelector(".answer").insertAdjacentHTML(
    "beforeend",
    `<p>масив номерів : [${numbersAuto}]</p>
    <p>починаються на букву «А» : ${countStartWithA(numbersAuto)}</p>
    
  <p>перша і остання літери співпадають : ${countFirstLastLettersMatch(
    numbersAuto
  )}</p>
  <p>складаються з більше ніш 5 символів : ${countMoreFiveCharacters(
    numbersAuto
  )}</p>
  
  
  
  
  
  
  
  `
  )
})
