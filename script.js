let display = document.getElementById("input"); 
let button = document.getElementById("add"); 
let todoContainer = document.querySelector(".todo-list"); 

let todos = []; 

function loadData(){
    let data = localStorage.getItem("todos"); 
    if(data){
        todos = JSON.parse(data); 
    }
    showData(); 
}

function showData(){
    todoContainer.innerHTML = ""; 

    todos.forEach((value,index)=>{
        let li = document.createElement("li"); 
        li.innerHTML = value; 

        let span = document.createElement("span"); 
        span.innerHTML = " x"; 

        span.addEventListener("click",()=>{
            deleteTodo(index); 
        });

        li.append(span); 
        todoContainer.append(li); 
    });
}

function saveData(){
    localStorage.setItem("todos", JSON.stringify(todos)); 
}

button.addEventListener("click",()=>{
    if(display.value == ""){
        alert("Enter something ..."); 
    }
    else{
        todos.push(display.value); 
        saveData(); 
        showData(); 
    }
    display.value = ""; 
}); 

function deleteTodo(index){
   todos.splice(index,1);  
   saveData(); 
   showData(); 
}

loadData();