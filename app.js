let inputTitle = document.querySelector('.input-title');
let inputPlace = document.querySelector('.input-place');
let inputTime = document.querySelector('.input-time');
let addBtn = document.querySelector('.add-btn');
let todoItems = document.querySelector('.todo-items');
let newThing = document.querySelector('.new-thing');
let toDoList = document.querySelector('.todo-list');
let itemPageBtn = document.querySelector('.item-page-btn');
let selectCategories = document.querySelector('.categories');
let filterCategories = document.querySelector('.filter-categories');



// document.addEventListener('DOMContentLoaded', loadToDo);
addBtn.addEventListener('click', createTodoItem);
todoItems.addEventListener('click', deleteBtn);
filterCategories.addEventListener('click', filterToDo);


function createTodoItem(event){
    event.preventDefault();

    const todoElem = document.createElement('div');
    todoElem.classList.add('todoelem');
    const selCat = document.createElement('p');
    selCat.classList.add('todo-type');
    const inTitle = document.createElement('p');
    inTitle.classList.add('todo-title');
    const inPlace = document.createElement('p');
    inPlace.classList.add('todo-place');
    const inTime = document.createElement('p');
    inTime.classList.add('todo-time');
    const checkBox = document.createElement('input');
    checkBox.classList.add('todo-check');
    checkBox.setAttribute('type', 'checkbox');
    const delBtn = document.createElement('button');
    delBtn.classList.add('todo-delete-btn');
    delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  

    selCat.innerText = selectCategories.options[selectCategories.selectedIndex].text;
    
    inTitle.innerText = inputTitle.value;
    inPlace.innerText = inputPlace.value;
    inTime.innerText = inputTime.value;
   
    // let saveItems = {"type":null, "title":null, "place":null, "time":null}

    todoElem.appendChild(selCat);
    // saveItems.type = selectCategories.options[selectCategories.selectedIndex].text;
    todoElem.appendChild(inTitle);
    // saveItems.title = inputTitle.value;
    todoElem.appendChild(inPlace);
    // saveItems.place = inputPlace.value;
    todoElem.appendChild(inTime);
    // saveItems.time = inputTime.value;

    todoElem.appendChild(checkBox);
    todoElem.appendChild(delBtn);

    // saveToLocal(inputTitle.value);
    // console.log(saveItems);
    // saveToLocal(saveItems);

    // todoElem.innerText = "hello";
    // todoList.classList.add('todoElem');



    todoItems.appendChild(todoElem);
    inputTitle.value = "";
    inputPlace.value = "";
    inputTime.value = "";


    checkBox.addEventListener('change', e => {
        if(e.target.checked === true) {
            let checkTrue = e.target
            let checkItemTrue = checkTrue.parentElement;
            checkItemTrue.classList.add("completed");
            // console.log("Checkbox is checked - boolean value: ", e.target.checked)

        }
        if(e.target.checked === false) {
            let checkFalse = e.target
            let checkItemFalse = checkFalse.parentElement;
            checkItemFalse.classList.remove("completed");
            // console.log("Checkbox is not checked - boolean value: ", e.target.checked)
        }
      });

      newThing.classList.add("page-hide");
      toDoList.classList.remove("page-hide");
};


function deleteBtn(e) {
    const item = e.target;
    if (item.classList[0] === "todo-delete-btn") {
        const todoItem = item.parentElement;
        todoItem.classList.add("delete-animation");
        todoItem.addEventListener('transitionend', function() {
            todoItem.remove();
       
        })
        
       
    }
}


itemPageBtn.addEventListener('click', function(){
    toDoList.classList.add("page-hide");
    newThing.classList.remove("page-hide");
 
});


function filterToDo(e){
    const todos = todoItems.children;
    // console.log(typeof todos)
    for (let i = 0; i < todos.length; i++) {
        if (e.target.value == 'all') {
            todos[i].style.display = 'grid';
        } 
        else if(e.target.value == 'completed') {
            if (todos[i].classList.contains('completed')) {
                todos[i].style.display = 'grid';
            } else {
                todos[i].style.display = 'none';
            }
            
        } 
        else if (e.target.value == 'uncompleted') {
            if (!todos[i].classList.contains('completed')) {
                todos[i].style.display = 'grid';
            } else {
                todos[i].style.display = 'none';
            }

        }
    }
   

}



// function saveToLocal(todo){
//     let todoArray;
//     if(localStorage.getItem('todoArray') === null) {
//         todoArray = [];
//     }else{
//         todoArray = JSON.parse(localStorage.getItem('todoArray'));
//     }
//     todoArray.push(todo);
//     localStorage.setItem('todoArray', JSON.stringify(todoArray));
// }


// function loadToDo(){
//     let todoArray;
//     if(localStorage.getItem('todoArray') === null) {
//         todoArray = [];
//     }else{
//         todoArray = JSON.parse(localStorage.getItem('todoArray'));
//     }

//     for (let i = 0; i < todoArray.length; i++) {

//     const todoElem = document.createElement('div');
//     todoElem.classList.add('todoelem');
//     const selCat = document.createElement('p');
//     selCat.classList.add('todo-type');
//     const inTitle = document.createElement('p');
//     inTitle.classList.add('todo-title');
//     const inPlace = document.createElement('p');
//     inPlace.classList.add('todo-place');
//     const inTime = document.createElement('p');
//     inTime.classList.add('todo-time');
//     const checkBox = document.createElement('input');
//     checkBox.classList.add('todo-check');
//     checkBox.setAttribute('type', 'checkbox');
//     const delBtn = document.createElement('button');
//     delBtn.classList.add('todo-delete-btn');
//     delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  
//     selCat.innerText = todoArray[i].type;
    
   
//     inTitle.innerText = todoArray[i].title;
//     console.log(todoArray[i].title)
//     inPlace.innerText = todoArray[i].place;
//     inTime.innerText = todoArray[i].time;
   
//     todoElem.appendChild(selCat);
//     todoElem.appendChild(inTitle);
//     todoElem.appendChild(inPlace);
//     todoElem.appendChild(inTime);

//     todoElem.appendChild(checkBox);
//     todoElem.appendChild(delBtn);
        

//     todoItems.appendChild(todoElem);
//     };

// }