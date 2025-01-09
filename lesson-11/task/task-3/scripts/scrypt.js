"usestrict"
if (confirm("почнемо гру")) {
  let number = 5

  function randomNumber(min = 0, max = number) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  function generationField() {
    let field = []
    for (let row = 0; row <= number; row++) {
      let arr = []
      for (let col = 0; col <= number; col++) {
        arr.push(0)
      }
      field.push(arr)
    }
    return field
  }

  function generationRandomShipInField(field) {
    let ship = 5

    while (ship) {
      let randPositioRow = randomNumber()
      let randPositioColumn = randomNumber()
      if (field[randPositioRow][randPositioColumn] === 1) {
        continue
      } else {
        field[randPositioRow][randPositioColumn] = 1
        ship--
      }
    }
    return field
  }

  let field = generationRandomShipInField(generationField())

  function showArray(arr) {
    let result = ``
    for (const element of arr) {
      result += `[${element}]`
    }

    return result
  }
  //=======================================
  let countShip = 5,
    countShot = 25

  while (countShip) {
    let userNumRow =
      parseInt(
        prompt(
          `${showArray(field)}введіть номер рядка від 1 до ${
            number + 1
          } залишилось пострілів : ${countShot}`
        )
      ) - 1
    let userNumColumn =
      parseInt(
        prompt(
          `введіть номер колонки від від 1 до ${
            number + 1
          } залишилось пострілів : ${countShot}`
        )
      ) - 1
    console.log(userNumColumn)

    if (
      userNumRow < 0 ||
      userNumRow > number ||
      userNumColumn < 0 ||
      userNumColumn > number ||
      userNumRow === null ||
      userNumColumn === null ||
      isNaN(userNumRow) ||
      isNaN(userNumColumn)
    ) {
      alert("введені некоректрі дані")
      continue
    }

    if (countShot === 0) {
      alert("У вас закінчилися постріли. Наступного разу пощастить!")
      break
    }
    if (field[userNumRow][userNumColumn] === 1) {
      alert("попав")
      field[userNumRow][userNumColumn] = 0
      countShip--
    } else {
      if (!confirm("не попав, продовджимо")) break
    }
    countShot--
  }
  if (countShip === 0) alert("вітаємо")
  else alert("наступного разу пощастить")
}
