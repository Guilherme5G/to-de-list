const ToDoField = document.querySelector('.to-do-field');
const ToDoSend = document.querySelector('.to-do-send');
const ToDoList = document.querySelector('.to-do-list')

function criali(){
    const li = document.createElement('li');
    return li;
}

function criaButtonClear(){
    const buttonClear = document.createElement('button');
    buttonClear.setAttribute('class', 'button-clear');
    buttonClear.innerText = 'Deletar';
    return buttonClear;
}

function criatarefa(li, buttonClear){
    li.innerText = ToDoField.value;
    li.appendChild(buttonClear);
    ToDoList.appendChild(li);
}

ToDoSend.addEventListener('click', function(e){
    const li = criali();
    const buttonClear = criaButtonClear();
    criatarefa(li, buttonClear); 
});

ToDoField.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        const li = criali();
        const buttonClear = criaButtonClear();
        criatarefa(li, buttonClear); 
    }
})

addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('buttons-clear')){
        el.parentElement.remove();
    }
});
