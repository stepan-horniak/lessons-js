"use strict"

const arrayGraphicImageAndLinkSite = [
  {
    link: `  <a target="_blank" href="https://moku.com.ua/profession/biznes-informatyka/">перейти на сайт</a>`,
    image: '<img src="./1.jpg">',
  },
  {
    link: `        <a target="_blank" href="https://biz.censor.net/columns/3304259/yakymy_mayut_buty_uroky_informatyky_v_shkolah">перейти на сайт</a>`,
    image: '<img src="./2.jpg">',
  },
  {
    link: `<a target="_blank" href="https://library.kpnu.edu.ua/?p=1207">перейти на сайт</a>`,
    image: '<img src="./3.png">',
  },
]

class Baner {
  constructor(arr) {
    this.arr = arr
  }

  getRandomBanner() {
    const randomIndex = Math.floor(Math.random() * this.arr.length)
    return this.arr[randomIndex]
  }

  displayRandomBanner() {
    const randomBanner = this.getRandomBanner()
    const answerElement = document.querySelector(".answer")

    answerElement.innerHTML = `${randomBanner.image} ${randomBanner.link}`
  }
}

const baner = new Baner(arrayGraphicImageAndLinkSite)
baner.displayRandomBanner()
