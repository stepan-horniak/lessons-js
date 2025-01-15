"usestrict"
let matr = [
  [0, 1, " "],
  [0, " ", " "],
  [" ", 1, " "],
]
function generate(matr, freeItemsLeft) {
  if (freeItemsLeft === 0) console.log(`${JSON.stringify(matr)}`)
  else {
    for (let i = 0; i < matr.length; i++) {
      for (let j = 0; j < matr[i].length; j++) {
        if (matr[i][j] === " ") {
          //----- у вільну клітинку ставимо 0 і переглядаємо усі, що залишились вільні
          let matrCopy1 = JSON.parse(JSON.stringify(matr))
          matrCopy1[i][j] = 0
          generate(matrCopy1, freeItemsLeft - 1)
          //----- у вільну клітинку ставимо 1 і переглядаємо усі, що залишились вільні
          let matrCopy2 = JSON.parse(JSON.stringify(matr))
          matrCopy2[i][j] = 1
          generate(matrCopy2, freeItemsLeft - 1)
        }
      }
    }
  }
}
generate(matr, 5)
