<template>
    <main class="min-vh-100 d-flex justify-content-center align-items-center">
        <ContactBook/>
    </main>

    <ModalAdd/>
</template>

<script setup>
import ContactBook from '@/components/contact-book/ContactBook.vue';
import ModalAdd from '@/components/Modal.vue';


</script>