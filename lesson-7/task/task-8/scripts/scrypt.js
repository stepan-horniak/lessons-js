"usestrict"
addEventListener("load", function () {
  function createImageLink(link) {
    return `<a href="${link}"><h1>smyle</h1><img src='../../1.jpg'></a>`
  }
  let link = `https://uk.m.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:Smiley.svg`
  let result = createImageLink(link)
  document.querySelector(".answer").insertAdjacentHTML("afterbegin", result)
})
