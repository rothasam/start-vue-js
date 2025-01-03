<template>

    <!-- Modal -->
    <div class="modal fade" id="mdlConfirm" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5">Delete Task</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                Are you sure you want to delete this task ?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary">Yes, i'm sure.</button>
            </div>
            </div>
        </div>
    </div>

</template>


<script setup>
import { Modal } from 'bootstrap';
import { onMounted } from 'vue';
import { useHomeStore } from '@/stores/views/home_store'; 

const homeStore = useHomeStore();
onMounted(() =>{ // mounted means after render html 
// what does this mounted meaning ?
    // it means that the code inside this block will be executed after the component(HTML) has been rendered to the DOM.

    // The DOM is a tree structure representation of the HTML document.

    homeStore.mdlConfirm = Modal.getOrCreateInstance(document.getElementById('mdlConfirm'));

} )


</script>