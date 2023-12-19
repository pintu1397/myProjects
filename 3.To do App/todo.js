// let todoList = [
//   {
//     item:'Buy Milk', dueDate:'17/12/2023'
//   },
//   {
//     item:'Go to collage', dueDate:'17/12/2023'
//   }
// ];
// localStorage.setItem('todoList', JSON.stringify(todoList));
// displayItems();
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];


function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');

  let todoItem = inputElement.value;
  let todoDate = dateElement.value;

  todoList.push({item : todoItem, dueDate:todoDate});
  inputElement.value = '';
  dateElement.value = '';
  localStorage.setItem('todoList', JSON.stringify(todoList));
  displayItems();
}

function displayItems(){
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';

  for(let i=0;i<todoList.length;i++){
    //let item = todoList[i].item;
    //let dueDate = todoList[i].dueDate;
    let{item,dueDate} = todoList[i];
    newHtml += `
      <span>${item}</span> 
      <span>${dueDate}</span> 
      <button 
      class="btn-delete"
        onclick="
          todoList.splice(${i},1);
          localStorage.setItem('todoList', JSON.stringify(todoList));
          displayItems();
        ">Delete
      </button>
    `;
  }
  containerElement.innerHTML = newHtml;
  
}

 displayItems();