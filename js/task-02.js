const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')

ingredients.forEach(function (ingredient) {
  const listItem = document.createElement('li')
  listItem.textContent = ingredient
  listItem.classList.add('item')
  console.log(listItem)
  list.append(listItem)

})
console.log(list)


