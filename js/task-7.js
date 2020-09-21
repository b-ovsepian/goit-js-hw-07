/*
Напиши скрипт, который реагирует на изменение значения 
input#font-size-control (событие input) и изменяет инлайн-стиль 
span#text обновляя свойство font-size. В результате при перетаскивании 
ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>

*/
const inputRef = document.getElementById("font-size-control");
const spanRef = document.getElementById("text");
console.dir(inputRef);
inputRef.addEventListener("input", function (event) {
  spanRef.style.fontSize = `${event.target.value}px`;
});
