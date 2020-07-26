const clockContainer = document.querySelector(".js_clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const nowDate = new Date();
    const hours = nowDate.getHours();
    const minutes = nowDate.getMinutes();
    const seconds = nowDate.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
} 

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();