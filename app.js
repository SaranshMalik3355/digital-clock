//html selection

const hr = document.querySelector(".hours");
const min = document.querySelector(".minutes");
const sec = document.querySelector(".seconds");

// date and time --> date object :-prewritten in javascript
//to use date object we have to create its variable
function updateTime() {
  let d = new Date();
  hr.innerHTML = d.getHours();
  min.innerHTML = d.getMinutes();
  sec.innerHTML = d.getSeconds();
}
// setInterval()

setInterval(updateTime, 1000);
