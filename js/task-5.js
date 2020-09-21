/*
Напиши скрипт который, при наборе текста в инпуте input#name-input
 (событие input), подставляет его текущее значение в span#name-output. 
 Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

 <input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>
*/

const inputRef = document.getElementById("name-input");
const nameOutputRef = document.getElementById("name-output");
inputRf.addEventListener("input", function (event) {
  if (event.target.value === "") {
    return (nameOutputRef.textContent = "незнакомец");
  } else return (nameOutputRef.textContent = event.target.value);
});
