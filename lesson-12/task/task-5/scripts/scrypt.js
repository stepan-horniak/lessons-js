"usestrict"

let names = [
  "John",
  "Alice",
  "Olga",
  "Peter",
  "Sam",
  "Nina",
  "Max",
  "Eva",
  "Chris",
  "Max",
  "Eva",
  "Chris",
  "John",
  "Alice",
  "Peter",
  "Sam",
  "Nina",
  "Max",
  "Eva",
  "Chris",
]

function bubleSort(arr) {
  let rearranged
  do {
    rearranged = false
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const swap = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = swap
        rearranged = true
      }
    }
  } while (rearranged)
  return arr
}

let sortedNames = bubleSort(names)

function binarySearch(arr, searchName, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1
  }

  let middle = Math.floor((start + end) / 2)

  if (arr[middle] === searchName) {
    return [middle, arr[middle]]
  } else if (arr[middle] > searchName) {
    return binarySearch(arr, searchName, start, middle - 1)
  } else {
    return binarySearch(arr, searchName, middle + 1, end)
  }
}

const [index, name] = binarySearch(sortedNames, "Olga")
document.querySelector(".answer").innerHTML = `

<div>масив : ${names}</div>
<div>імя ${name} під індексом : ${index}</div>
`
