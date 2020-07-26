const form = document.querySelector(".js_form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js_greeting");

const LS_USER = "currentUser";
const SHOWING_UN = "showing";

function saveName(text){
    localStorage.setItem(LS_USER,text);
}

function askForName(text){
    form.classList.add(SHOWING_UN);
    form.addEventListener("submit",handleSubmut);
}

function handleSubmut(event){   // evnet = submit(이것도 event)
    event.preventDefault(); // 기본 동작을 막는데 필요한 1단계
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_UN);
    greeting.classList.add(SHOWING_UN);
    greeting.innerText = `Hello! ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(LS_USER); 
    if(currentUser === null){
        askForName();
    }else {// currentUser가 localstorage에 있으면
        paintGreeting(currentUser); //localstorage에서 가져온 텍스트와 함께 함수 호출
    }
}

function init(){
    loadName();
}

init();