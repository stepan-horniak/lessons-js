window.addEventListener("load", () => {
  //========================
  class SearchFilter {
    constructor(input, searchListSelector, listSelector, itemsSelector) {
      this.input = document.querySelector(input)
      this.searchList = document.querySelector(searchListSelector)
      this.list = document.querySelector(listSelector)
      this.itemSelector = document.querySelectorAll(itemsSelector)

      this.init()
    }

    init() {
      this.input.addEventListener("input", (e) => this.handleInput(e))
    }

    handleInput(e) {
      const searchValue = e.target.value.toLocaleLowerCase()
      for (const item of this.itemSelector) {
        if (
          searchValue &&
          item.textContent.toLocaleLowerCase().startsWith(searchValue)
        ) {
          this.searchList.append(item)
        } else {
          this.list.append(item)
        }
      }
    }
  }

  const searchFilter = new SearchFilter(
    ".inputText", //інпут
    ".filter-list", // список відфільтрованих
    ".list", // список загальний
    ".item" // елементи
  )
})
