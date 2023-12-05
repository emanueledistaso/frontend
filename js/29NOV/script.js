printTodos();

async function printTodos () {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
    );
    // console.log(response);
    const todoList = await response.json();
    const toComplete = todoList.filter( task => task.completed == false );
    // console.log(toComplete);
    const taskPrint = document.createElement("ul");
    let listPrint = document.getElementById("todoList");
    for (let index in toComplete){
        let taskPrintItem = document.createElement("li");
        taskPrintItem.innerText = toComplete[index].title;
        taskPrint.appendChild(taskPrintItem);
    }
    listPrint.appendChild(taskPrint);
}