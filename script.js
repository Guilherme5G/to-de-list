const ToDoField = document.querySelector('.to-do-field');
const ToDoSend = document.querySelector('.to-do-send');
const ToDoList = document.querySelector('.to-do-list')

ToDoSend.addEventListener('click', function(e){
    const li = document.createElement('li');
    const buttonClear = document.createElement('button');
    buttonClear.setAttribute('class', 'button-clear');
    buttonClear.innerText = 'Deletar';
    li.innerText = ToDoField.value;
    li.appendChild(buttonClear);
    ToDoList.appendChild(li);
});

addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('buttons-clear')){
        el.parentElement.remove();
    }
})
