// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counterValueEl = document.querySelector("#value");
let counterValue = 0;
const buttonEl = document.querySelectorAll("#counter button");

buttonEl.forEach((button) => {
  button.addEventListener("click", (event) => {
    const action = event.target.getAttribute("data-action");
    if (action === "decrement") {
      counterValue -= 1;
    } else if (action === "increment") {
      counterValue += 1;
    }

    counterValueEl.textContent = counterValue;
  });
});
