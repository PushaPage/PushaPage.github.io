 window.addEventListener('load', function() {
    ;{      

        let toDoList = _('#toDoList')[0],
            allDel = _('#btnAllDel')[0],
            container = _('#container')[0];

                     
        let tasks = JSON.parse(localStorage.getItem('todo')) || [], 
            lastId = tasks.length; 

        function addItem(task) {                            
            container.insertAdjacentHTML('beforeEnd', [
              `<div class="list d-flex" data-id="${task.id}" tabindex="1">
                <span class="list-num">${task.id + 1}</span>
                <p class="list-text">${task.text}</p>
                <div class="box-btns">
                  <button type="button" class="btn-check fas fa-check" title="Ready" data-click="check" tabindex="2"></button>
                  <button type="button" class="btn-edit fas fa-edit" title="Edit" data-click="edit" tabindex="2"></button>            
                  <button type="button" class="btn-remove fal fa-trash-alt" title="Remove" data-click="remove" tabindex="2"></button>
                </div>  
              </div>`
            ].join('') );
        };  

      tasks.forEach( (task,i) =>{

        addItem(task);

      });

      function createTask () {        

        let task = {
           
            id: lastId++,
            text: toDoList.asktask.value,
            created: new Date()
        };

        tasks.push(task);
        localStorage.setItem('todo', JSON.stringify(tasks));

        addItem(task);    
      };  


      toDoList.asktask.onfocus = (()=>{        
        toDoList.asktask.classList.remove('invalid-task');
      });     

      toDoList.addEventListener('submit', function (event){
      
        event.preventDefault();

        if(toDoList.asktask.value == ''){ 

          toDoList.asktask.classList.add('invalid-task');              
          
        }else{           

              createTask ();
              toDoList.reset(); 
        };     
      });

      allDel.addEventListener('click', () =>{ 

        localStorage.clear();
          
          let listsDel = _('.list');

          for (let i = 0; i < listsDel.length; i++) {
                listsDel[i].remove();
          };
            window.location.reload();       
      }); 

      container.addEventListener('click', function(e){

        let el = e.target;

        if (el.matches('[data-click="edit"]')) {

          let parent = el.closest('[data-id]');

              el.previousElementSibling.style.display = 'block';
              el.style.display = 'none';

          parent.childNodes.forEach( el => {           

            

            if(el.classList == 'list-text'){ 

              let area = document.createElement('textarea');
                  area.classList.add('edit-area');
                  area.value = el.innerHTML;
                  area.style.height = el.offsetHeight + 'px';
                  el.replaceWith(area);
                  area.focus();

              area.addEventListener('keydown', function(){

                  if(this.scrollTop > 0){

                    this.style.height = this.scrollHeight + 'px';
                  };
              });              
            };
          });            
        };

        if (el.matches('[data-click="check"]')) {

          let parent = el.closest('[data-id]');

          parent.childNodes.forEach( el => {  

            if(el.classList == 'edit-area'){              

              for (let i in tasks) {

                if (tasks[i].id == parent.dataset.id) {                 


                  let task = {
             
                      id: tasks[i].id,
                      text: el.value,
                      created: new Date()
                  };           

                
                  tasks.splice(i, 1, task);              


                  localStorage.setItem('todo', JSON.stringify(tasks));

                  let paragrf = document.createElement('p');
                      paragrf.classList.add('list-text');
                      paragrf.innerHTML = el.value;
                      el.replaceWith(paragrf);
                      el.blur();                                
                      break;
                };  
              };           
            }
          });

            el.nextElementSibling.style.display = 'block';
            el.style.display = 'none';      

         };
       

        if (el.matches('[data-click="remove"]')) {
          let parent = el.closest('[data-id]');

          for (let i in tasks) {
            if (tasks[i].id == parent.dataset.id) {
              tasks.splice(i, 1);
              localStorage.setItem('todo', JSON.stringify(tasks));
              break;
            };
          };

          parent.remove();
        }
      });   

  
      
    function _(selector) {

        return document.querySelectorAll(selector);
    };  

    };
  });  