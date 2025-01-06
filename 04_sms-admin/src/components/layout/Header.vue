<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <RouterLink class="navbar-brand fw-bold" :to="{name : 'home'}">SMS-SCHOOL</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink class="nav-link d-flex justify-content-center align-items-center" :to="{name: 'home'}" 
                    :class="{ active: route.name === 'home'}">
                        <span><i class="iconoir-home-alt"></i></span>
                        <span>&nbsp;Home</span>
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link d-flex justify-content-center align-items-center" :to="{name: 'student'} " :class="{ active: route.name === 'student'}">
                        
                        <span><i class="iconoir-group"></i></span>
                        <span>&nbsp;Student</span>
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link d-flex justify-content-center align-items-center" :to="{name: 'teacher'}" :class="{active: route.name === 'teacher'}">
                        <span><i class="iconoir-user"></i></span>
                        <span>Teacher</span>
                    </RouterLink>
                </li>
                
            </ul>
            </div>
        </div>
        </nav>
    </header>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute();
</script>

<style scoped>
.active{
    color: blue!important;
}
</style>