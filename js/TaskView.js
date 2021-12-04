class TaskView{

    
    //State
    constructor(task){
        this.task = task;
        this.next = null;
        this.prev = null;
        this.delete = null;
        
        //Object.seal(this);
    }
 
    render = ()=>{
        //Construir un elemento visual
        let component = document.createElement("div");      //<div></div>
        let name = document.createElement("div");          //<p></p>
        let desc = document.createElement("div");
        desc.classList.add("text");
        let date = document.createElement("div");
        date.classList.add("date");
        name.classList.add("name");

 
                      //<p></p>

        this.prev =()=>{
            if(this.task.statusId ==4){

                var newid = this.task.statusId-2;
            }else{

                var newid = this.task.statusId-1;
            }
            
            let task = {

                id: this.task.id,
                statusId: newid
            };

             updateTask(task);

        }
        
        this.next =()=>{
            if(this.task.statusId ==2){

                var newid = this.task.statusId+2;
            }else{

                var newid = this.task.statusId+1;
            }
            
            let task = {

                id: this.task.id,
                statusId: newid
            };

             updateTask(task);

        }
        
        this.delete =()=>{
           
            let task = {

                id: this.task.id,
            };

             deleteTask(task);

        }

        if(this.task.statusId == 1 || this.task.statusId == 2 ){
            
            let nextBtn = document.createElement("button");
             nextBtn.classList.add("button2");
             nextBtn.addEventListener("click",(event)=>{
                event.preventDefault();
                this.next();
                
            }); 
             component.appendChild(nextBtn);
        

        }
         if(this.task.statusId == 2 || this.task.statusId == 4){
            let prevBtn = document.createElement("button");
            prevBtn.classList.add("button3");
            prevBtn.addEventListener("click",(event)=>{ 
                event.preventDefault();
                this.prev();
                
            });
            component.appendChild(prevBtn);
        }

        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("button1");
        name.innerHTML = this.task.title;
        desc.innerHTML = this.task.description;
        date.innerHTML = this.task.taskDate;
        component.appendChild(name);              //<div><p></p></div>
        component.appendChild(desc);              //<div><p></p><p></p></div>
        component.appendChild(date);   
        component.appendChild(deleteBtn);
        component.classList.add("taskview"); //<div class="userview">  ....  </div>
        deleteBtn.addEventListener("click", (event)=>{
            event.preventDefault();
            this.delete();
            
        });
 
        return component;
    }

    
}