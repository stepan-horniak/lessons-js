"usestrict"
addEventListener("load", function () {
  let numbersAuto = [
    ["A", "A", "2", "3", "2", "4", "A", "O"],
    ["A", "O", "2", "6", "7", "O", "A"],
    ["N", "O", "2", "6", "7"],
    ["F", "O", "7", "O", "B"],
    ["A", "O", "7", "O", "B"],
    ["F", "7", "O", "B"],
    ["B", "O", "B"],
  ]
  function startWithA(array) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
      if (array[i][0] === "A") {
        count++
      }
    }

    return count
  }

  function firstLastLettersMatch(array) {
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
  function moreFiveCharacters(array) {
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
    `<p>масив номерів : let numbersAuto = [
    <br>
    ["A", "A", "2", "3", "2", "4", "A", "O"],<br>
    ["A", "O", "2", "6", "7", "O", "A"],<br>
    ["N", "O", "2", "6", "7"],<br>
    ["F", "O", "7", "O", "B"],<br>
    ["A", "O", "7", "O", "B"],<br>
    ["F", "7", "O", "B"],<br>
    ["B", "O", "B"],
  ]</p>
    <p>починаються на букву «А» : ${startWithA(numbersAuto)}</p>
    
  <p>перша і остання літери співпадають : ${firstLastLettersMatch(
    numbersAuto
  )}</p>
  <p>складаються з більше ніш 5 символів : ${moreFiveCharacters(
    numbersAuto
  )}</p>
  
  
  
  
  
  
  
  `
  )
})
