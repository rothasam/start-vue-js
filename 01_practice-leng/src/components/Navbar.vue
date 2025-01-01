<!-- <script setup>
import { RouterLink } from 'vue-router';

</script> -->

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <RouterLink class="navbar-brand" :to="{ name : 'home' }">HAHA</RouterLink>   <!-- Note the use of : before to, which indicates that it is a dynamic binding. -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <RouterLink :to="{name : 'home'}" class="nav-link" :class="{'text-success': route.name === 'home'}">
                        <span><i class="fa-solid fa-house"></i></span>
                        <span class="ps-2">Home</span>
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink  :to="{ name : 'about' }" class="nav-link" :class="{'text-success': route.name === 'about'}">
                        <span><i class="fa-solid fa-user"></i></span>
                        <span class="ps-2">About</span>
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" :to="{name : 'contact'}" :class="{'text-success': route.name === 'contact'}">
                        <span><i class="fa-solid fa-phone-volume"></i></span>
                        <span class="ps-2">Contact</span>
                    </RouterLink>
                </li>
                
            </ul>
            
                <RouterLink class="btn btn-success" :to="{name : 'login'}">Login</RouterLink>
                <RouterLink class="btn btn-outline-success ms-3" :to="{name : 'register'}">Register</RouterLink>
            </div>
        </div>
    </nav>
    </header>
</template>

<script setup>
// useRoute() to retrieve information of route
// useRouter() to បញ្ជា​ route

// import vRoute from 'vue-route'
// const routes = vRoute.useRouter();

import { useRoute } from 'vue-router'; // Destruction, useRoute is a function so that we don't need to create object and dot to those attributes

const route = useRoute()



</script>