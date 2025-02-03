window.addEventListener("load", () => {
  //=======================
  const container = document.querySelector(".container")
  function getWrapperHtmlTag(element, text) {
    const tag = document.createElement(element)
    tag.textContent = text
    return tag
  }
  //=======5=====
  const studentsAges = [15, 14, 16, 17, 20, 18, 15, 16, 19, 14, 20, 17, 14]
  //=================
  function calcAgesSameNumber(arrAges) {
    const arrNum = new Map()

    arrAges.forEach((el) => arrNum.set(el, (arrNum.get(el) ?? 0) + 1))

    const max = Math.max(...arrNum.keys())

    return [arrNum, `Максимальне: ${max} `]
  }

  const [arrNumbers, maxNumber] = calcAgesSameNumber(studentsAges)
  //===================
  container.append(getWrapperHtmlTag("hr"))
  container.append(getWrapperHtmlTag("div", "Задача 5"))

  container.append(
    getWrapperHtmlTag("div", JSON.stringify(Object.fromEntries(arrNumbers)))
  )
  container.append(getWrapperHtmlTag("div", maxNumber))
  container.append(getWrapperHtmlTag("hr"))
  //===========6==========
  const books = [
    { title: "1984", year: 1949, author: "Джордж Орвелл" },
    { title: "Колгосп тварин", year: 1945, author: "Джордж Орвелл" },
    { title: "Майстер і Маргарита", year: 1967, author: "Михайло Булгаков" },
    { title: "Собаче серце", year: 1925, author: "Михайло Булгаков" },
    {
      title: "Преступление и наказание",
      year: 1866,
      author: "Федір Достоєвський",
    },
    { title: "Брати Карамазови", year: 1880, author: "Федір Достоєвський" },
    {
      title: "Гаррі Поттер і філософський камінь",
      year: 1997,
      author: "Джоан Роулінг",
    },
    { title: "Війна і мир", year: 1869, author: "Лев Толстой" },
    {
      title: "Гаррі Поттер і таємна кімната",
      year: 1998,
      author: "Джоан Роулінг",
    },
    { title: "Війна і мир", year: 1869, author: "Лев Толстой" },

    { title: "Анна Кареніна", year: 1877, author: "Лев Толстой" },
  ]
  //=================
  function calcBooksForAuthor(arrBooks) {
    const arrResult = new Map()

    arrBooks.forEach((element) => {
      arrResult.set(element.author, (arrResult.get(element.author) ?? 0) + 1)
    })

    return arrResult
  }

  //===========================
  container.append(getWrapperHtmlTag("div", "Задача 6"))

  container.append(
    getWrapperHtmlTag(
      "div",
      JSON.stringify(Object.fromEntries(calcBooksForAuthor(books)))
    )
  )
  container.append(getWrapperHtmlTag("hr"))
  //===========7==========
  const visits = [
    "user1",
    "user2",
    "user3",
    "user1",
    "user4",
    "user2",
    "user1",
    "user5",
    "user3",
    "user4",
    "user6",
    "user2",
    "user5",
    "user1",
    "user3",
    "user7",
    "user6",
    "user2",
    "user8",
    "user3",
  ]
  function countNumberVisitsClient(arrVisits) {
    const res = new Map()

    arrVisits.forEach((element) => {
      res.set(element, (res.get(element) ?? 0) + 1)
    })

    return res
  }

  //============================
  container.append(getWrapperHtmlTag("div", "Задача 7"))

  container.append(
    getWrapperHtmlTag(
      "div",
      JSON.stringify(Object.fromEntries(countNumberVisitsClient(visits)))
    )
  )
  container.append(getWrapperHtmlTag("hr"))
  //===========8==========
  const students = [
    {
      fullName: "Іваненко Петро Олександрович",
      course: 1,
      faculty: "Фізико-математичний",
    },
    {
      fullName: "Сидоренко Ольга Миколаївна",
      course: 2,
      faculty: "Економічний",
    },
    {
      fullName: "Коваленко Андрій Васильович",
      course: 3,
      faculty: "Юридичний",
    },
    { fullName: "Мельник Тетяна Сергіївна", course: 4, faculty: "Медичний" },
    {
      fullName: "Іваненко Петро Олександрович",
      course: 1,
      faculty: "Фізико-математичний",
    }, // повторення
    {
      fullName: "Данилюк Наталія Віталіївна",
      course: 2,
      faculty: "Економічний",
    },
    { fullName: "Павленко Дмитро Олегович", course: 3, faculty: "Юридичний" },
    { fullName: "Мельник Тетяна Сергіївна", course: 4, faculty: "Медичний" }, // повторення
    {
      fullName: "Шевченко Максим Юрійович",
      course: 1,
      faculty: "Фізико-математичний",
    },
    {
      fullName: "Сидоренко Ольга Миколаївна",
      course: 2,
      faculty: "Економічний",
    }, // повторення
  ]
  function countNumberCourseStudents(arrStudents) {
    const arrFaculty = new Set(arrStudents.map((el) => el.faculty))

    const arrNumberStudentCourses = new Map()
    arrStudents.forEach((student) => {
      arrNumberStudentCourses.set(
        student.course,
        (arrNumberStudentCourses.get(student.course) ?? 0) + 1
      )
    })
    return [arrFaculty, arrNumberStudentCourses]
  }
  const [arrFaculty, arrNumberStudentCourses] =
    countNumberCourseStudents(students)
  //=====================================
  container.append(getWrapperHtmlTag("div", "Задача 8"))
  container.append(getWrapperHtmlTag("div", JSON.stringify([...arrFaculty])))
  container.append(
    getWrapperHtmlTag(
      "div",
      JSON.stringify(Object.fromEntries(arrNumberStudentCourses))
    )
  )
  container.append(getWrapperHtmlTag("hr"))
  //===========9==========
  const temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
  function countTemp(arrTemp) {
    const numberTemp = new Set([...arrTemp])
    const numberTempRounded = new Set(arrTemp.map((el) => Math.ceil(el)))
    return [numberTemp, numberTempRounded]
  }
  const [numberTemp, numberTempRounded] = countTemp(temperatures)
  //=========================
  container.append(getWrapperHtmlTag("div", "Задача 9"))
  container.append(getWrapperHtmlTag("div", JSON.stringify([...numberTemp])))
  container.append(
    getWrapperHtmlTag("div", JSON.stringify([...numberTempRounded]))
  )
  container.append(getWrapperHtmlTag("hr"))
  //===========10==========
  const mathClub = [
    "Іваненко",
    "Сидоренко",
    "Коваленко",
    "Мельник",
    "Петренко",
    "Гриценко",
    "Шевченко",
  ]
  const historyClub = [
    "Коваленко",
    "Мельник",
    "Петренко",
    "Данилюк",
    "Павленко",
    "Сидоренко",
    "Федорчук",
  ]
  function countStudents(arrMath, arrHistory) {
    const mathClubStydent = new Set([...arrMath])
    const historyClubStydent = new Set([...arrHistory])
    const historyClassAttendMatрСlassStudent =
      historyClubStydent.intersection(mathClubStydent)

    const uniqueStudent = historyClubStydent.union(mathClubStydent)
    return [historyClassAttendMatрСlassStudent, uniqueStudent]
  }
  const [historyClassAttendMatрСlassStudent, uniqueStudent] = countStudents(
    mathClub,
    historyClub
  )
  //=======================
  container.append(getWrapperHtmlTag("div", "Задача 10"))
  container.append(
    getWrapperHtmlTag(
      "div",
      JSON.stringify([...historyClassAttendMatрСlassStudent])
    )
  )
  container.append(getWrapperHtmlTag("div", JSON.stringify([...uniqueStudent])))
  //====================================
})
