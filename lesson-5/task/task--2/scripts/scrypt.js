"usestrict"
addEventListener("load", function () {
  const answer = document.querySelector(".answer-1")
  let collectionRandomNumber = 0
  let evenCount = 0
  let oddCount = 0
  for (let i = 0; i < 100; i++) {
    collectionRandomNumber += Math.floor(Math.random() * 1000) + 1
    if (collectionRandomNumber % 2 === 0) {
      evenCount++
    } else {
      oddCount++
    }
  }
  answer.insertAdjacentHTML(
    "beforeend",
    `загальна сума 100 чисел = ${collectionRandomNumber}, парних чисел =${evenCount} непарних чисел =${oddCount}`
  )
})
