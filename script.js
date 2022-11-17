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


document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
