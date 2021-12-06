/* 
* Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
* Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
    * азмеры самого первого <div> - 30px на 30px.
    * Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
    * Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
* Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
 */

const refs = {
  input: document.querySelector('#controls > input'),
  createBtn: document.querySelector('[data-create]'),
  clearBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};
const { input, createBtn, clearBtn, boxes } = refs;

createBtn.addEventListener('click', createBoxes);
clearBtn.addEventListener('click', destroyBoxes);