const tdList = document.querySelector("#ToDo-List form");
const tdInput = document.querySelector("#ToDo-List input");
const tdul = tdList.querySelector("ul");
tdList.style.display= "none";

let toDos = [];
const ToDos_Key = "toDos";

const savedToDos = localStorage.getItem(ToDos_Key);
function saveToDos(){
    localStorage.setItem(ToDos_Key,JSON.stringify(toDos));
    console.log(JSON.stringify(toDos))
}
function whatToDo(td){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = td.text;
    li.id = td.id;
    button.addEventListener("click",deleteToDO);
    button.innerText = "X";
    li.appendChild(span);
    li.appendChild(button);
    tdul.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = tdInput.value;
    tdInput.value = "";
    const newToDoObj = {
        text:newToDo,
        id: Date.now(),
    };
    whatToDo(newToDoObj);
    toDos.push(newToDoObj);
    saveToDos();
}
function deleteToDO(){
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
}
function sayHello(item){
    console.log("this name is:",item);
}

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(sayHello);
}

tdList.addEventListener("submit",handleToDoSubmit);