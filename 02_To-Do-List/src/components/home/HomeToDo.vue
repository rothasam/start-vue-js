<template>
    <div class="container">
      <div class="row">
        <div class="col-4 mx-auto">
          <h1 class="text-center text-white fw-bold">To Do List</h1>
            <form @submit.prevent="addNewTask()">
              <div class="d-flex my-4">
                <input type="text" class="form-control rounded-end-0" placeholder="Add a new task" v-model="state.task_name" />
                <button class="btn btn-primary rounded-start-0">Add</button> 
              </div>
            </form>

            <ul class="list-group">
              <li v-for="task in state.tasks" :key="task.id" class="list-group-item">
                <div class="d-flex justify-content-between">
                  <span :class="{'text-decoration-line-through' : task.is_completed}" >{{ task.id }}. {{ task.name }}</span>
                  <div class="d-flex gap-2">
                    <a @click="editTask(task.id)" v-show="!task.is_completed" role="button" class="text-warning"><i class="bi bi-pencil-square"></i></a>
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

const state = reactive({
  tasks:[
    {id: 1, name: 'tv count down', is_completed: false},
    {id: 2, name: 'dekkkk', is_completed: true},
    {id: 3, name: 'Buy new computer', is_completed: true},
  ],
  task_name: ''
})
const addNewTask = () => {
    
    
  if(state.task_name.trim() == ''){
    return;
  }else{
    const newTask = {
        id: state.tasks.length + 1,
        name: state.task_name,
        is_completed: false
    };
    state.tasks.push(newTask);
    state.task_name = '';
  }
}

const taskAction = (seletedID,action) => {
    const findTask = state.tasks.find(task => task.id == seletedID);
    if(findTask && action == 'completed'){
        findTask.is_completed = true;
    }else{
        findTask.is_completed = false;
    }
}

const editTask = (seletedID) => {
    const findTask = state.tasks.find(task => task.id == seletedID); 
    if(findTask){
        state.task_name = findTask.name;
    }
} 

const deleteTask = (seletedID) => {
    const findTask = state.tasks.find(task => task.id == seletedID);
    if(findTask){
        state.tasks.splice(state.tasks.indexOf(findTask), 1);
    }
}


</script>