/*
Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>

*/

const inputRef = document.getElementById("validation-input");
inputRef.addEventListener("focusout", function (event) {
  if (event.target.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add("valid");
  } else inputRef.classList.add("invalid");
});
