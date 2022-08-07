const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const totalCategories = document.querySelector("#ingredients");

const elements = ingredients.map(ingredient => {
const elementLi = document.createElement('li');

 elementLi.textContent =(ingredient); 
 elementLi.classList.add('item');     
  return elementLi;
});

totalCategories.append(...elements);

console.log(totalCategories);