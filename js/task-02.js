const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListEl = document.getElementById("ingredients")

const ingredientsArrayEl = ingredients.map(ingredient => {
  const listElement = document.createElement("li");
  return lisElement.textContent(`${ingredient}`)
});

console.log(ingredientsArrayEl)