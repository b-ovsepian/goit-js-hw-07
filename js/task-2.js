/* 
Напиши скрипт, который для каждого элемента массива ingredients 
создаст отдельный li, после чего вставит все li за одну операцию в 
список ul.ingredients. Для создания DOM-узлов используй document.createElement().
*/

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = document.querySelector("#ingredients");
ingredients.forEach((element) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = element;
  ingredientsList.append(ingredientItem);
});
