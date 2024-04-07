const LoginDiv = document.querySelector("#Log-in");
const PlayInput = document.querySelector("#Log-in input");
const loginButton = document.querySelector("#Log-in button");
const onToDoList = document.querySelector("#ToDo-List form");

const saveIdList = [];
const Id_Key = "Id";
loginButton.innerText = "Login";
function loginBtn(event) {
  const playerID = PlayInput.value;
  event.preventDefault();
  const loginTex  = document.createElement("h1");
  saveIdList.push(loginTex);
  loginTex.innerHTML = `Hello  ${playerID}!`;
  LoginDiv.appendChild(loginTex);
  PlayInput.style.display = "none";
  loginButton.style.display = "none";
  onToDoList.style.display = "block";
}
function saveId(){
  localStorage.setItem(Id_Key,JSON.stringify(saveIdList));
  console.log(JSON.stringify(saveIdList))
}
loginButton.addEventListener("click", loginBtn);