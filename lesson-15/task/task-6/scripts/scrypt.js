"use strict"

const namesBoys = ["Ivan", "Petro", "Loci"],
  namesGirls = ["Olga", "Iryna", "Jana"]

class LeaderDances {
  constructor(arrBoys, arrGirls) {
    this.arrBoys = arrBoys
    this.arrGirls = arrGirls
  }

  getRandomNamesBoy() {
    return this.arrBoys[Math.floor(Math.random() * this.arrBoys.length)]
  }
  getRandomNamesGirl() {
    return this.arrGirls[Math.floor(Math.random() * this.arrGirls.length)]
  }
  getCoupleForDancing() {
    const boy = this.getRandomNamesBoy()
    const girl = this.getRandomNamesGirl()

    return (document.querySelector(
      ".answer"
    ).innerHTML += `${boy} та ${girl} <br>`)
  }
  run() {
    setInterval(() => {
      this.getCoupleForDancing()
    }, 5000)
  }
}

const leaderDances = new LeaderDances(namesBoys, namesGirls)
leaderDances.run()
