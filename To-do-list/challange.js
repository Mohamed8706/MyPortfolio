// Get Var Values
let input = document.querySelector(".input");
let submit = document.querySelector("[type='submit']");
let tasksDiv = document.querySelector(".tasks");

let arrayOfTasks = [];



if (window.localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(window.localStorage.getItem("tasks"));

}

getDataFromLocalStorage();

// Click On Delete
tasksDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")){
        // Delete From Local Storage
        deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
        // Delete From Page
        e.target.parentElement.remove();

    }
    //toggle status 

    if (e.target.classList.contains("task")) {

        toggleStatusTaskWith(e.target.getAttribute("data-id"));

        e.target.classList.toggle("done");
    }
    if (e.target.classList.contains("delete-all")) {
        tasksDiv.innerHTML = "";
        window.localStorage.removeItem("tasks");

    }
    
})



submit.onclick = function() {
    if (input.value) {
        addTasksToArray(input.value);
        input.value = "";


    }
}

function addTasksToArray(taskText) {
    const task = {
    id: Date.now(),
    title: taskText, 
    completed: false,
    }
    arrayOfTasks.push(task);
    addElementsToPage(arrayOfTasks);
    // Add Tasks To local storage 
    addDataToLocalStorage(arrayOfTasks);
    delAll();

}

function addElementsToPage(arrayOfTasks){
    tasksDiv.innerHTML = "";
    arrayOfTasks.forEach((task) => {
        // Check If Class Is Done
        if (task.completed) {
            div.className = "task done";
        }
        let div = document.createElement("div");
        div.innerHTML = task.title;
        div.className = "task";
        div.setAttribute("data-id", task.id);
        let span = document.createElement("span");
        span.innerHTML = "Delete";
        span.className = "del";
        div.appendChild(span);
        tasksDiv.appendChild(div);
        
    });

    }

    function addDataToLocalStorage(arrayOfTasks) {
        window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));

    }

    function getDataFromLocalStorage() {
        let data = window.localStorage.getItem("tasks");
        if (data) {
        let tasks = JSON.parse(data);
        addElementsToPage(tasks);
        }

    }
function deleteTaskWith(taskId) {
        arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
        addDataToLocalStorage(arrayOfTasks);

    }
function toggleStatusTaskWith(taskId) {
        for (let i = 0; i < arrayOfTasks.length; i++) {
            if (arrayOfTasks[i].id == taskId) {
                arrayOfTasks[i].completed == false ? arrayOfTasks[i].completed = true: arrayOfTasks[i].completed = false;
            }
            
        }
        addDataToLocalStorage(arrayOfTasks);
        
    }
    function delAll() {
        let delAll = document.createElement("span");
        delAll.innerHTML = "Delete All";
        delAll.className = "delete-all";
        if (tasksDiv.innerHTML !== "") {
        tasksDiv.append(delAll);
        }
        else if (tasksDiv.firstChild === delAll) {
            delAll.remove()
        }
    }






