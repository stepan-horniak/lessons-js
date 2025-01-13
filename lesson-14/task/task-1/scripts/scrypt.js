"usestrict"
let companies = [
  {
    companyName: "TechDevelopers Ltd.",
    owner: "Олександр Шевченко",
    sponsors: [
      { lastName: "Іваненко", firstName: "Іван", contribution: 101000 },
      { lastName: "Петренко", firstName: "Марія", contribution: 7000 },
    ],
    releaseYear: 2001,
    siteCost: 15000,
  },
  {
    companyName: "WebCreators Inc.",
    owner: "Катерина Литвиненко",
    sponsors: [
      { lastName: "Сидоренко", firstName: "Андрій", contribution: 10000 },
      { lastName: "Коваленко", firstName: "Ольга", contribution: 800000 },
    ],
    releaseYear: 2021,
    siteCost: 5000,
  },
  {
    companyName: "DigitalSolutions",
    owner: "Максим Ткаченко",
    sponsors: [
      { lastName: "Гриценко", firstName: "Олег", contribution: 12000 },
      { lastName: "Захарченко", firstName: "Людмила", contribution: 15000 },
    ],
    releaseYear: 2007,
    siteCost: 65000,
  },
  {
    companyName: "CreativeWeb Studio",
    owner: "Анастасія Бондар",
    sponsors: [
      { lastName: "Мельник", firstName: "Юрій", contribution: 5000 },
      { lastName: "Лисенко", firstName: "Тетяна", contribution: 9000 },
    ],
    releaseYear: 2019,
    siteCost: 18000,
  },
  {
    companyName: "NextGen Solutions",
    owner: "Дмитро Поліщук",
    sponsors: [
      { lastName: "Романенко", firstName: "Валентин", contribution: 20000 },
      { lastName: "Савченко", firstName: "Ірина", contribution: 150000 },
    ],
    releaseYear: 2002,
    siteCost: 35000,
  },
]

//=========1=============

const getTotalPriceAllSites = (arr) => {
  return arr.reduce((totalPrice, prize) => totalPrice + prize.siteCost, 0)
}

//=========2=============

const getNumberSitesProducedFrom2000To2009 = (arr) => {
  return arr.reduce(
    (numberSites, year) =>
      year.releaseYear > 2000 && year.releaseYear < 2009
        ? numberSites + 1
        : numberSites,
    0
  )
}

//=========3=============

const getSponsorshipInvestmentsBigger100000 = (arr) => {
  return arr.reduce(
    (prevValue, el) =>
      prevValue +
      el.sponsors.reduce(
        (prevValue, el) =>
          el.contribution > 100000 ? prevValue + el.contribution : prevValue,
        0
      ),
    0
  )
}

//=========4=============

const createListAllSponsors = (arr) => {
  return arr.map((el) => el.sponsors).flat()
}

//=========5=============

const findYearProfitBiggest = (arr) => {
  let maxsiteCost = 0,
    year

  arr.forEach((el) => {
    if (maxsiteCost < el.siteCost) {
      maxsiteCost = el.siteCost
      year = el.releaseYear
    }
  })
  return year
}

//=========6=============

const sortListDescendingProfit = (arr) => {
  return arr.sort((a, b) => b.siteCost - a.siteCost)
}

//=========7=============

const createTwoListContainSitesCostTo10000More10000 = (arr) => {
  let arrTo10000 = [],
    arrMore10000 = []
  for (const element of arr) {
    if (element.siteCost > 10000) arrMore10000.push(element)
    else arrTo10000.push(element)
  }

  return { arrTo10000, arrMore10000 }
}
