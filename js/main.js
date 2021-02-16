const time = document.getElementById('display');
const b12 = document.getElementById('12');
const b24 = document.getElementById('24');
let base = 12;
b24.onclick = function milTime() {
    base =24;
}
b12.onclick = function regTime() {
    base = 12;
}


function updateTime() {
let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /)
if (base === 12) {
    time.textContent = hour + ':' + minute + ':' + second;
} else {
    hour = (Number(hour)+12)
    time.textContent = (hour) + ':' + minute + ':' + second;
    }
}

setInterval(updateTime, 1000);