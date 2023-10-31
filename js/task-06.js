// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const validInputEl = document.querySelector("#validation-input");

validInputEl.addEventListener("blur", onValidInputBlur);
validInputEl.addEventListener("focus", onValidInputFocus);

function onValidInputBlur(event) {
  const value = event.target.value;
  const minLength = +event.target.dataset.length;

  if (value.length > minLength) {
    event.target.classList.add("valid");
  } else {
    event.target.classList.add("invalid");
  }
}

function onValidInputFocus(event) {
  event.target.classList.remove("valid");
  event.target.classList.remove("invalid");
}
