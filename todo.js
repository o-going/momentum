const toDoForm = document.querySelector(".js_toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js_toDoList");

const TODOS_LS = "toDos";

let toDos = [];   // 할 일을 생성했을 때 여기에 추가되게끔

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){   // 배열 toDos를 가져와서 로컬에 저장함
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));  // JS array를 string으로 바꿔줌
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);   // 마지막으로 ul에 li를 넣음
    li.id = newId;  // li에 id를 줌
    const toDoObj = {
        text: text,    // text라는 key가 text가 value
        id: newId
    };
    toDos.push(toDoObj);    // toDos array안에 toDoObj를 넣음
    saveToDos();    // push하고 호출을 해야함 아니면 안에 저장되어 있는게 없음
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";   // console에 나옴 (submit 같은거)
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){ // 이 부분 아직 이해안감
            paintToDo(toDo.text);
        });
    }// else를 안해주는 이유 : toDoList 폼은 항상 있어야 하기 때문에 
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();