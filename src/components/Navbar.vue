<!-- <script setup>
import { RouterLink } from 'vue-router';

</script> -->

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <RouterLink class="navbar-brand" :to="{ name : 'home' }">NavBrand</RouterLink>   <!-- Note the use of : before to, which indicates that it is a dynamic binding. -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <RouterLink class="nav-link active" aria-current="page" :to="{name : 'home'}">Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" :to="{ name : 'about' }">About</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" :to="{name : 'contact'}">Contact</RouterLink>
                </li>
                
            </ul>
            
                <RouterLink class="btn btn-success" :to="{name : 'login'}">Login</RouterLink>
                <RouterLink class="btn btn-outline-success ms-3" :to="{name : 'register'}">Register</RouterLink>
            </div>
        </div>
    </nav>
    </header>
</template>