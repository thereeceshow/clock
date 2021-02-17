const time = document.getElementById('display2');
const ampm = document.getElementById('upDis');
const b12 = document.getElementById('12');
const b24 = document.getElementById('24');
const date = document.getElementById('upDisDay');
const day = document.getElementById('day');
const month = document.getElementById('month');
const numDate = document.getElementById('numDate');
const light = document.getElementById('light');
const dispLight = document.getElementById('display');
let base = 12;
b24.onclick = function milTime() {
    base =24;
    updateTime()
}
b12.onclick = function regTime() {
    base = 12;
    updateTime()
}


function updateTime() {
let milTime = new Date();
let milHours = String(milTime.getHours());    
let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /);
let months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Nov','Dec'];
let days = ['Sun', 'Mon', 'Tue','Wed','Thu','Fri','Sat'];
// Display Month
todayMonth = (months[milTime.getMonth()]);
month.textContent = todayMonth;
// Display Day of the Week
todayDay = (days[milTime.getDay()]);
day.textContent = todayDay;
// Display Date
todayDate = (milTime.getDate());
numDate.textContent = todayDate;
if (base === 12) {
    time.textContent = hour + ':' + minute + ':' + second;
    if (milHours < 13) {
        ampm.textContent = 'AM'
    } else {
        ampm.textContent = 'PM'
    }
} else {
    // let milTime = new Date();
    // let milHours = String(milTime.getHours()); 
    time.textContent = milHours + ':' + minute + ':' + second;
    ampm.textContent = 'mil'
    }
}

light.onclick = function lightUp() {
    dispLight.classList.toggle('lightUp');
    // setInterval(lightUp, 2000);

}

setInterval(updateTime, 1000);