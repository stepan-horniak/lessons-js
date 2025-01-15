"usestrict"
let arrBoys = ["ivan", "stepan", "oleg"]
let arrGirls = ["olga", "irina", "diana"]

function couplesForDancing(arrBoys, arrGirls, boyIndex = 0, girlIndex = 0) {
  //   for (let boy = 0; boy < arrBoys.length; boy++) {
  //     for (let girl = 0; girl < arrGirls.length; girl++) {
  //       console.log(`${arrBoys[boy]} - ${arrGirls[girl]}`)
  //     }
  //   }
  if (boyIndex >= arrBoys.length) return

  if (girlIndex >= arrGirls.length) {
    couplesForDancing(arrBoys, arrGirls, boyIndex + 1, 0)
    return
  }

  console.log(`${arrBoys[boyIndex]} - ${arrGirls[girlIndex]}`)

  couplesForDancing(arrBoys, arrGirls, boyIndex, girlIndex + 1)
}

couplesForDancing(arrBoys, arrGirls)
