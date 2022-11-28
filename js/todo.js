const toDoForm = document.querySelector('#todo_form');
const toDoList = document.querySelector('#todo_list');
const toDoInput = toDoForm.querySelector('input');

let toDos = [];

const TODOS_KEY = 'todos'

// 저장
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
// 삭제하기
function deleteToDo(e) {
    /* deleteToDo 함수는 click이벤트를 기다림 (line:21), 
       click 이벤트 안에는 여러 속성(property) 들이 들어있는데,
       target 속성을 통해 무엇을 클릭했는지 확인할 수 있음
    
       삭제 버튼을 눌렀을 때 해당 내용이 지워지게 하려면 target의 부모태그를 알아야함
       -> parentElement
    */
    const li = e.target.parentElement;
    li.remove();
}
// 입력받은 TO DO 값 리스트로 보여주기
function paintToDo(newToDo) {
    // ul 태그 안에 li 태그 그린 다음 그 안에 span 태그도 그릴 것
    const li = document.createElement('li');
    const span = document.createElement('span');
    // span 태그 안에 입력값 넣기
    span.innerText = newToDo;
    // 삭제버튼 만들기
    const button = document.createElement('button');
    button.innerText = 'Delete';
    // 삭제 이벤트
    button.addEventListener('click', deleteToDo);
    // li 태그 안에 span 태그 넣기
    li.appendChild(span);
    li.appendChild(button);
    // 만들어진 li 태그를 ul태그 아래 넣기
    toDoList.appendChild(li);
}

//입력한 TO DO 값 저장
function savedtoDoList(e) {
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = '';
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}
// submit
toDoForm.addEventListener('submit', savedtoDoList);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}