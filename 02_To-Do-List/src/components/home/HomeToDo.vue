<template>
    <div class="container">
      <div class="row">
        <div class="col-4 mx-auto">
          <h1 class="text-center text-white fw-bold">To Do List</h1>
            <form @submit.prevent="addNewTask()">
              <div class="d-flex my-4">
                <input type="text" class="form-control rounded-end-0" placeholder="Add a new task" v-model="state.task_name" />
                <button class="btn btn-primary rounded-start-0">
                  {{ state.seleted_ID == 0 ? 'Add' : 'Update' }}
                </button> 
              </div>
            </form>

            <ul class="list-group">
              <li v-for="task in homeStore.tasks" :key="task.id" class="list-group-item">
                <div class="d-flex justify-content-between">
                  <span :class="{'text-decoration-line-through' : task.is_completed}" >{{ task.id }}. {{ task.name }}</span>
                  <div class="d-flex gap-2">
                    <a @click="editTask(task.id , task.name)" v-show="!task.is_completed" role="button" class="text-warning"><i class="bi bi-pencil-square"></i></a>
                    <a @click="deleteTask(task.id)" role="button" class=" text-danger"><i class="bi bi-trash3"></i></a>
                    <a @click="taskAction(task.id,'completed')" v-show="!task.is_completed" role="button" class=" text-success"><i class="bi bi-check-circle"></i></a>
                    <a @click="taskAction(task.id,'cancel')" v-show="task.is_completed" role="button" class=" text-dark"><i class="bi bi-x-circle"></i></a>
                  </div>
                </div>
              </li>
            </ul>
        </div>
      </div>
    </div>



</template>

<script setup>
import { reactive } from 'vue'
import { useHomeStore } from '@/stores/views/home_store';
const homeStore = useHomeStore();

const state = reactive({
  task_name: '',
  seleted_ID: 0
})
const addNewTask = () => {
  
  // console.log(ids); // return object of id
/*
  Math.max(ids);
  console.log(Math.max(ids));  // return NAN 
*/
  // let maxID = Math.max([...ids]);  // create new array

  if(state.seleted_ID == 0){
    if(state.task_name.trim() == ''){
      return;
    }
    if(homeStore.tasks.length > 0){
      let ids = homeStore.tasks.map(item => item.id);  
      let nextId = Math.max(...ids) + 1;
      const newTask = {
        id: nextId,
        name: state.task_name,
        is_completed: false
      };
      homeStore.tasks.push(newTask);
    }else{
      let nextId = 1;
      const newTask = {
        id: nextId,
        name: state.task_name,
        is_completed: false
      };
      homeStore.tasks.push(newTask);
    }
    
    

  }else{
    const findTaskID = homeStore.tasks.findIndex(task => task.id == state.seleted_ID);
    homeStore.tasks[findTaskID].name = state.task_name;
    state.seleted_ID = 0;
  }
  state.task_name = ''; // clear input field

}

const taskAction = (seletedID,action) => {
    // const findTask = homeStore.tasks.find(task => task.id == seletedID);
    // if(findTask && action == 'completed'){
    //   findTask.is_completed = true;
    // }else{
    //   findTask.is_completed = false;
    // }

    let findTaskID = homeStore.tasks.findIndex(task => task.id == seletedID);
    if(action == 'completed'){
      homeStore.tasks[findTaskID].is_completed = true;
    }else{
      homeStore.tasks[findTaskID].is_completed = false;
    }

    // the difference between find and findIndex function ?
    // find() return the object and findIndex() return the index of the object
}
// we should separate the function above into 2 function 


const editTask = (seletedID,seltedTask) => {
    state.task_name = seltedTask;
    state.seleted_ID = seletedID;
    
} 

// const deleteTask = (seletedID) => {
//     const findTask = homeStore.tasks.find(task => task.id == seletedID);
//     if(findTask){
//         homeStore.tasks.splice(homeStore.tasks.indexOf(findTask), 1);
//     }
// khos te
// }

const deleteTask = (seletedID) => {
  homeStore.seleted_id = seletedID;
  homeStore.mdlConfirm.show();
}


</script>