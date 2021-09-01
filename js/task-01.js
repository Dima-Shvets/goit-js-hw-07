console.log(`В списке ${document.querySelectorAll("#categories .item").length}  категории.`);

const categoriesItemsEl = document.querySelectorAll(".item")

categoriesItemsEl.forEach(categoryItem => console.log(`Категория: ${categoryItem.querySelector("h2").textContent}
Количество элементов: ${categoryItem.querySelectorAll("li").length}`)
    )

