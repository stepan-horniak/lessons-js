"usestrict"
addEventListener("load", () => {
  const lengthСentimeters = parseInt(
    prompt("введіть довжину в сантиметрах", "1000")
  )
  const kilometers = lengthСentimeters / 100000
  const meters = lengthСentimeters / 100

  const answer = document.querySelector(".answer")
  answer.innerHTML = `
  У метрах це буде ${meters}, а в кілометрах ${kilometers}
  `
})
