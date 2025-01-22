"usestrict"

function getUserNumberYear() {
  let userYear = parseInt(document.getElementById("date").value)

  const currentYear = new Date().getFullYear()

  return (document.querySelector(".answer").innerText = `вам тепер ${
    currentYear - userYear
  } років`)
}

window.onload = () => {
  document.getElementById("date").onchange = getUserNumberYear
}
