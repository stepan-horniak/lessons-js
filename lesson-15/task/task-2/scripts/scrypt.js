"use strict"
class Shot {
  constructor(arrRabbit) {
    this.arrRabbit = arrRabbit
  }

  shot() {
    return parseInt(prompt(`стріляйте від 1 до${this.arrRabbit.length}`)) - 1
  }
  showPlayingField() {
    let res = ``
    res += `<div>1</div><div>2</div><div>3</div>4<div>5</div><div>6</div>`

    return res
  }
}
const arrRabbit = [1, 0, 0, 0, 1, 0, 0]
const shot = new Shot(arrRabbit)
console.log(shot.showPlayingField())
