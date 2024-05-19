
      function addTask() {
      
       let taskInput = document.getElementById('new-task');
       let taskList = document.getElementById('task-list');

       
       let taskText = taskInput.value;


        if (taskText.trim() === '') {
            swal({
                title: "Are you sure?",
                text: "Please Input The Task",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
            return;
        }

        let time = new Date();
        let timeString = ' TIME: ' +
                         time.getHours().toString().padStart(2, '0') + ':' + 
                         time.getMinutes().toString().padStart(2, '0') + ':' + 
                         time.getSeconds().toString().padStart(2, '0') + ' DATE:' +
                         time.getDate().toString().padStart(2, '0') + '/' +          
                         (time.getMonth() + 1).toString().padStart(2, '0') + '/' +  
                         time.getFullYear().toString();   
                                     
        
        

        
        let listItem = document.createElement('li');
        listItem.textContent = taskText + ' - ' + timeString;

       
        taskList.appendChild(listItem);

        taskInput.value = '';
    }


