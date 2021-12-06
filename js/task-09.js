// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const colorButton = document.querySelector('.change-color');
colorButton.addEventListener('click', btnClick);
const colorName = document.querySelector('.color');

function btnClick() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
}