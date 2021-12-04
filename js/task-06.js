// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const input = document.getElementById('validation-input');

input.addEventListener('blur', checkInputValue);

function checkInputValue(e) {
   e.currentTarget.value.length === Number(this.dataset.length)
     ? (input.classList = 'valid')
     : (input.classList = 'invalid');
 
   if (!input.value) input.removeAttribute('class');
 }