<template>
    <main class="min-vh-100 d-flex justify-content-center align-items-center">
        <ContactBook/>
    </main>

    <ModalAdd/>
    <ModalDelete/>
</template>

<script setup>
import ContactBook from '@/components/contact-book/ContactBook.vue';
import ModalAdd from '@/components/contact-book/ModalAdd.vue';
import ModalDelete from '@/components/contact-book/ModalDelete.vue';


</script>