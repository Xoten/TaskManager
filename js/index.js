const nameTF = document.getElementById("nameTF");
const descTF = document.getElementById("descTF");
const addBtn = document.getElementById("addBtn");
const toDoContainer = document.getElementById("toDoContainer");
const doingContainer = document.getElementById("doingContainer");
const doneContainer = document.getElementById("doneContainer");
const titleToDo = document.getElementById("titleToDo");
const titleDoing = document.getElementById("titleDoing");
const titleDone = document.getElementById("titleDone");



const updateTask = async (task)=>{
  
    
    let json = JSON.stringify(task);
    //let obj = JSON.parse(json);

    let response = await fetch("https://trelloappalejandro.herokuapp.com/api/tasks/update", 
        {
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: json
        }
    );
    if(response.ok){
        let data = await response.json();
        console.log(data);
        getAllTasks();
    }
    
}

const deleteTask = async (x)=>{
    
    let json = JSON.stringify(x);
    //let obj = JSON.parse(json);

    let response = await fetch("https://trelloappalejandro.herokuapp.com/api/tasks/delete", 
        {
            method: "DELETE",
            headers: {
                "Content-Type":"application/json"
            },
            body: json
        }
    );
    if(response.ok){
        let data = await response.json();
        console.log(data);
        getAllTasks();
    } 
}

const getAllTasks = async ()=>{
    let response = await fetch("https://trelloappalejandro.herokuapp.com/api/tasks/getall");
    let data = await response.json();
    toDoContainer.innerHTML = "";
    toDoContainer.appendChild(titleToDo);
    doingContainer.innerHTML ="";
    doingContainer.appendChild(titleDoing);
    doneContainer.innerHTML = "";
    doneContainer.appendChild(titleDone);

    
    for(let i in data){
        let task = data[i];     
        let taskView = new TaskView(task);
        let view = taskView.render();

        
         //let view = taskView.render();
        
        if(task.statusId == 1){
            toDoContainer.appendChild(view);


        }else if(task.statusId == 2){
            doingContainer.appendChild(view);
        }else if(task.statusId == 4){
            doneContainer.appendChild(view);
        }
        

        
        
        
        console.log(taskView);
        //usersContainer.innerHTML += `<li>${user.name}</li>`;
    }
}

getAllTasks();


const postTask = async ()=>{
    let task = {

        title:nameTF.value,
        description:descTF.value
    };
    

    let json = JSON.stringify(task);
    //let obj = JSON.parse(json);

    let response = await fetch("https://trelloappalejandro.herokuapp.com/api/tasks/create", 
        {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                
            },
            body: json
        }
    );
    if(response.ok){
        let data = await response.json();
        console.log(data);
        getAllTasks();
    }
}


addBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    postTask();
    nameTF.value = "";
    descTF.value = "";
});









