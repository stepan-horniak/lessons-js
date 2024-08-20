"usestrict"
addEventListener("load", function () {
  let image = `<img src='../../1.jpg' alt="">`
  let title = `smyle`
  let link = `https://www.google.com/search?q=google&oq=goog&gs_lcrp=EgZjaHJvbWUqEAgAEAAYgwEY4wIYsQMYgAQyEAgAEAAYgwEY4wIYsQMYgAQyEwgBEC4YgwEYxwEYsQMY0QMYgAQyDQgCEAAYgwEYsQMYgAQyBggDEEUYOTINCAQQABiDARixAxiABDINCAUQABiDARixAxiABDIKCAYQABixAxiABDINCAcQABiDARixAxiABDIKCAgQABixAxiABDINCAkQABiDARixAxiABNIBCTQ3MTBqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8"`

  function createImageLink(image, title, link) {
    let result = `<a href="${link}"><h1>${title}</h1>${image}</a>`
    return result
  }

  let answer = document
    .querySelector(".answer")
    .insertAdjacentHTML("afterbegin", createImageLink(image, title, link))
})
