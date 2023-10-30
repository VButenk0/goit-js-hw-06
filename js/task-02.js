const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingrList = document.querySelector("#ingredients");
ingredients.forEach((ingridient) => {
  const ingrItem = document.createElement("li");
  ingrItem.textContent = ingridient;
  ingrItem.classList.add("item");
  ingrList.appendChild(ingrItem);
});
