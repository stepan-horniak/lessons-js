"usestrict"

if (confirm("почнемо гру")) {
  const userNumberCells = parseInt(prompt("введіть кіслькість клітинок", "8"))
  let userNumberShip = parseInt(prompt("введіть кіслькість кораблів", "3"))
  function getRandomNumber(max, min = 0) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  function getArrayShipCells(numberCells, numberShip) {
    let arrayCells = new Array(numberCells).fill(0)
    for (let i = 0; i < numberShip; i++) {
      arrayCells[getRandomNumber(numberCells - 1)] = 1
    }
    return arrayCells
  }

  let arrayGame = getArrayShipCells(userNumberCells, userNumberShip)

  do {
    let count = 0
    for (let i = 0; i < arrayGame.length; i++) {
      if (arrayGame[i] === 1) count++
    }
    const userNumberShot = parseInt(
      prompt(
        `введіть номер клітинки куди постріл клітинок від 1 до ${userNumberCells}, залишилось кораблів : ${count}`,
        ""
      )
    )
    if (isNaN(userNumberShot)) break
    if (arrayGame[userNumberShot - 1] === 1) {
      alert("Ви влучили!")
      arrayGame[userNumberShot - 1] = 0
    } else {
      alert("Промах!")
    }
  } while (!arrayGame.every((el) => el === 0))
  alert("всі кораблі потоплені")
}
