let list = ["Olga", "Ivan", "John", "Sara"]

function generate(list, res) {
  if (list.length === 0) console.log(`[${res}]`)
  else {
    for (const sportsman of list) {
      generate(
        list.filter((el) => el !== sportsman),
        [...res, sportsman]
      )
    }
  }
}
generate(list, [])
