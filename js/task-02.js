const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListEl = document.getElementById('ingredients');

function makeListElement(element) {
  const listElement = document.createElement('li')
  listElement.textContent = element;
  return listElement
}

const listEl = ingredients.map(makeListElement);

ingredientsListEl.append(...listEl);
