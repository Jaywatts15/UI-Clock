const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
let ampm = document.getElementById('ampm');

// Time Function
function setTime() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  // Convert time to 12 hour system
  if (h > 12) {
    h -= 12;
    ampm.innerHTML = 'PM';
  } else {
    ampm.innerHTML = 'AM';
  }

  // pad single digit nums with leading zero
  h = ('0' + h).slice(-2);
  m = ('0' + m).slice(-2);
  s = ('0' + s).slice(-2)

  hour.innerHTML = h;
  minute.innerHTML = m;
  second.innerHTML = s;
}

setInterval(setTime, 1000)