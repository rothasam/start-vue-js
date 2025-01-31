<template>

    <div class="col-6 m-auto px-4 py-3 box-shadow">
        <div class="mb-4 pb-3" style="border-bottom: 1px dashed #ddd;">
            <h5>{{ customerStore.selected_id == 0 ? t('addCustomer.title.add') : t('addCustomer.title.edit') }}</h5>
            <p class="mb-0">{{ t('addCustomer.description') }}</p>
        </div>
        <div class="d-flex mb-4">
            <div class="cus-img">
                <img :src="customerStore.crop.avartar" alt="default-img">
            </div>
            <div class="ms-3">
                <h5>{{ t('addCustomer.imgTitle') }}</h5>
                <p>{{ t('addCustomer.imgDes') }}</p>

                <div class="center justify-content-start">
                    <a role="button" class="btn border-0 px-0" style="width: fit-content;"
                    @click="onChooseImage()"><span class=" center"><i class="iconoir-upload "></i>{{ t('addCustomer.btnfile') }}</span></a>
                    <input id="file-image" 
                        type="file" 
                        class="d-none"
                        @change="onSelectedImage($event)">

                    <button class="btn" @click="deleteCurrentImg()">
                        <span class="center"><i class="iconoir-trash"></i>{{ t('addCustomer.btnDelete') }}</span>
                    </button>
                </div>
            </div>
        </div>
        <form>
            <div class="row">
                <div class="col-6">
                    <div class="mb-3 input-contain">
                        <label for="firstName" class="form-label">{{ t('addCustomer.form.firstName') }} *</label>
                        <input type="text" class="form-control" id="firstName" v-model="customerStore.frmData.firstName">
                        <span class="error-feedback" v-if="validationError.firstName">{{ validationError.firstName }}</span>
                        
                    </div>
                    
                </div>
                <div class="col-6">
                    <div class="mb-3 input-contain">
                        <label for="lastName" class="form-label">{{ t('addCustomer.form.lastName') }} *</label>
                        <input type="text" class="form-control" id="lastName" v-model="customerStore.frmData.lastName">
                        <span class="error-feedback" v-if="validationError.lastName">{{ validationError.lastName }}</span>
                    </div>
                </div>
                <div class="col-6">
                    <label class="form-label">{{ t('addCustomer.form.gender') }} *</label>
                    <select class="form-select"
                        v-model="customerStore.frmData.gender"
                    >
                        <option selected disabled>{{ t('addCustomer.form.chooseGender') }}</option>
                        <option value="Male">{{ t('addCustomer.form.male') }}</option>
                        <option value="Female">{{ t('addCustomer.form.female') }}</option>
                    </select>
                    <span class="error-feedback" v-if="validationError.gender">{{ validationError.gender }}</span>
                </div>
                <div class="col-6">
                    <label class="form-label">{{ t('addCustomer.form.branch') }} *</label>
                    <select class="form-select"
                        v-model="customerStore.frmData.branch"
                    >
                        <option selected disabled>{{ t('addCustomer.form.chooseBranch') }}</option>
                        <option value="Kandal">{{ t('addCustomer.form.kandal') }}</option>
                        <option value="Phnom Penh">{{ t('addCustomer.form.pp') }}</option>
                        <option value="Prey Veng">{{ t('addCustomer.form.preyVeng') }}</option>
                    </select>
                    <span class="error-feedback" v-if="validationError.branch">{{ validationError.branch }}</span>
                </div>
                <div class="col-12">
                    <div class="my-3 input-contain">
                        <label for="email" class="form-label">{{ t('addCustomer.form.email') }} *</label>
                        <input type="text" class="form-control" id="email" 
                            v-model="customerStore.frmData.email"
                            @input="useValidate.customValidation(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)" 
                        >
                        <span class="error-feedback" v-if="validationError.email">{{ validationError.email }}</span>
                    </div>
                    <!-- <span class="error-feedback">សូមបញ្ចូលអ៊ីមែលដែលត្រឹមត្រូវ</span> -->
                </div>
            </div>
        </form>
        <div class="between mt-3">
            <div class="d-flex gap-3">
                <button class="btn btn-outline-primary center" @click="closeAdd()"><i class="iconoir-arrow-left-circle me-2"></i>{{ t('addCustomer.btnBack') }}</button>
                <button class="btn btn-outline-danger center" @click="clearInput()"><i class="iconoir-xmark-circle me-2"></i>{{ t('addCustomer.btnClear') }}</button>
            </div>
            <div>
                <button class="btnPrimary" @click="saveCustomer()">
                    {{  customerStore.selected_id == 0 ? t('addCustomer.btnAdd') : t('addCustomer.btnEdit') }}
                </button>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useCustomerStore } from '@/stores/view/customers/customers_store';
import { useCustomValidation } from '@/stores/CustomValidation';
import axios from 'axios';
import { useI18n } from 'vue-i18n';
import { computed, reactive } from 'vue';
const {t} = useI18n();
const customerStore = useCustomerStore();
const useValidate = useCustomValidation();

const validationError = reactive({
    firstName: '',
    lastName: '',
    gender: '',
    branch: '',
    email: ''
});


const validateForm = () => {
    let isValid = true;

    validationError.firstName = '';
    validationError.lastName = '';
    validationError.gender = '';
    validationError.branch = '';
    validationError.email = '';

    if (!customerStore.frmData.firstName) {
        validationError.firstName = computed(() => t('validateErrMsg.fName'));
        isValid = false;
    }
    if (!customerStore.frmData.lastName) {
        validationError.lastName = computed(()=> t('validateErrMsg.lName'));
        isValid = false;
    }
    if (!customerStore.frmData.gender) {
        validationError.gender = computed(()=> t('validateErrMsg.gender'));
        isValid = false;
    }
    if (!customerStore.frmData.branch) {
        validationError.branch = computed(()=>t('validateErrMsg.branch'));
        isValid = false;
    }
    if (!customerStore.frmData.email) {
        validationError.email = computed(()=> t('validateErrMsg.email'));
        isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(customerStore.frmData.email)) {
        validationError.email = computed(() => t('validateErrMsg.invalidEmail'));
        isValid = false;
    }

    return isValid;
};

const onChooseImage = () => {
    document.getElementById('file-image').value = ''
    document.getElementById('file-image').click()
}

const onSelectedImage = (e) => {
    if (e.currentTarget.files.length == 0) {
        return
    }
    const file = e.currentTarget.files[0];
    customerStore.crop.img = URL.createObjectURL(file)
    customerStore.mdl_crop.show()
}


const closeAdd = () => {
    customerStore.addCustomer = !customerStore.addCustomer;
    customerStore.crop.blob = null;
    customerStore.crop.avartar = '/img/no_photo.jpg';
    clearInput();
}


function clearInput(){
    customerStore.frmData = {
        firstName: '',
        lastName: '',
        gender: '',
        branch: '',
        email: '',
        // photo: ''
    }
    customerStore.crop.blob = null;
    customerStore.crop.avartar = '/img/no_photo.jpg';
}


const saveCustomer = () => {
    if (!validateForm()) return; 

    let inputData = new FormData();
    inputData.append('firstName', customerStore.frmData.firstName);
    inputData.append('lastName', customerStore.frmData.lastName);
    inputData.append('gender', customerStore.frmData.gender);
    inputData.append('branch', customerStore.frmData.branch);
    inputData.append('email', customerStore.frmData.email);
    // inputData.append('photo', customerStore.frmData.photo);
    
    if(customerStore.crop.blob){
        inputData.append('photo',customerStore.crop.blob)
    }

    if(customerStore.selected_id == 0){
        axios.post('/api/customers/store.php',inputData)
            .then(res => {
                customerStore.fetchCustomers();
                customerStore.addCustomer = !customerStore.addCustomer;
                clearInput();
            })

    }else{
        if(customerStore.frmData.removePhoto){
            inputData.append('removePhoto',true);
        }
        axios.post(`/api/customers/update.php?id=${customerStore.selected_id}`,inputData)
            .then(res => {
                customerStore.fetchCustomers();
                customerStore.fetchStatistics()
                customerStore.addCustomer = !customerStore.addCustomer;
                customerStore.selected_id = 0;
                clearInput();
            })
    }
}

const deleteCurrentImg = () => {
    customerStore.crop.blob = null;
    customerStore.crop.avartar = '/img/no_photo.jpg';
    customerStore.frmData.removePhoto = true;
}

</script>


<style scoped>
.cus-img{
    width: 120px;
    height: 120px;
    
    img{
        border-radius: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

</style>