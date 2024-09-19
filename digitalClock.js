let hours = document.getElementById("hours");
let minuts = document.getElementById("minuts");
let seconds = document.getElementById("seconds");
let AM_PM=document.getElementById('AM_PM');

setInterval(() => {
  let date = new Date();
  hours.innerHTML = date.getHours();
  minuts.innerHTML = date.getMinutes();
  seconds.innerHTML = date.getSeconds();
  AM_PM.innerHTML=(date.getHours()<12)?'AM':'PM';
}, 1000);
let date = new Date();