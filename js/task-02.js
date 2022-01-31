const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = [];

ingredients.forEach(function (ingredient) {
  const ingredientItem = document.createElement('li');
  ingredientItem.classList.add('item');
  ingredientItem.textContent = ingredient;
  ingredientsEl.push(ingredientItem);

  console.log(ingredientItem);
  
})
const ingredientsList = document.querySelector('#ingredients');

ingredientsList.append(...ingredientsEl);

console.log(ingredientsList);





