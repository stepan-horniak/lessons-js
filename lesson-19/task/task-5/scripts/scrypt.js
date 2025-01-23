window.addEventListener("load", () => {
  document.querySelector(".row").addEventListener("click", (e) => {
    const element = e.target
    if (element.closest(".cart")) {
      element.closest(".cart").classList.toggle("border-color")
    }
  })
})
