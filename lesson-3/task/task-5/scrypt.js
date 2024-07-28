"usestrict"
addEventListener("load", () => {
  let drivingLicense = prompt(
    "Введіть категорію водія (А, В, С)",
    "b"
  ).toLowerCase()
  if (drivingLicense === "a") alert("Ви можете керувати мотоциклом.")
  if (drivingLicense === "b") alert("Ви можете керувати легковим автомобілем.")
  if (drivingLicense === "c") alert("Ви можете керувати вантажним автомобілем.")
})
