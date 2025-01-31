<template>
    
        <div class="modal fade" id="mdlCrop" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <div>

                        <h1 class="modal-title fs-5" id="exampleModalLabel">{{ t('cropperModal.title') }}</h1>
                        <p>{{ t('cropperModal.description') }}</p>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" style="height: 300px;">
                    <Cropper
                        :src="customerStore.crop.img"
                        :stencil-props="{
                            aspectRatio: 1
                        }"
                        @change="onChangeCrop"
                    />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary center" data-bs-dismiss="modal"><i class="iconoir-xmark-circle me-2"></i>{{ t('cropperModal.btnCancel') }}</button>
                    <a role="button" class="btn btn-info center" @click="onChooseImage()"><i class="iconoir-upload me-2" ></i>{{ t('cropperModal.btnChangeImg') }}</a>
                    <button type="button" class="btn btn-primary center" @click="onCropped()"><i class="iconoir-check-circle me-2"></i>{{ t('cropperModal.btnCrop') }}</button>
                </div>
                </div>
            </div>
        </div>

</template>

<script setup>
import { Modal } from 'bootstrap';
import { useCustomerStore } from '@/stores/view/customers/customers_store';
import { onMounted } from 'vue';
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css'
import 'vue-advanced-cropper/dist/theme.compact.css'
import { useI18n } from 'vue-i18n';
const { t} = useI18n();
const customerStore = useCustomerStore();
let temp = null

onMounted(() => {
    customerStore.mdl_crop = Modal.getOrCreateInstance(document.getElementById('mdlCrop'));
});
const onChangeCrop = ({coordinates, canvas }) => {
    temp = canvas
}

const onChooseImage = () => {
    document.getElementById('file-image').value = ''
    document.getElementById('file-image').click()
}

const onCropped = () => {
    temp.toBlob((bin) => {
        customerStore.crop.blob = bin
        customerStore.crop.avartar = URL.createObjectURL(bin)
        customerStore.mdl_crop.hide()
    }, 'image/jpeg')
}


</script>