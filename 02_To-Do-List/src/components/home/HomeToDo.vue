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
                <div class="d-flex justify-content-between align-items-center">
                  <span :class="{'text-decoration-line-through' : task.is_completed}" >{{ task.id }}. {{ task.name }}</span>
                  <div class="d-flex gap-2">
                    <button v-show="!task.is_completed" type="button" class="btn btn-warning"><i class="bi bi-pencil-square"></i></button>
                    <button type="button" class="btn btn-danger"><i class="bi bi-trash3"></i></button>
                    <button v-show="!task.is_completed" type="button" class="btn btn-success"><i class="bi bi-check-circle"></i></button>
                    <button v-show="task.is_completed" type="button" class="btn btn-dark"><i class="bi bi-x-circle"></i></button>
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
  alert(state.task_name);
}
</script>