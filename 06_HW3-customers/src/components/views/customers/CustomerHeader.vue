<template>
    <div class="col-12 my-5">
        <div class="head-wrap py-3">
            <div>
                <h3>{{ t('header.title') }}</h3>
                <p class="mb-0">{{ t('header.description') }}</p>
            </div>
            <div class="d-flex gap-3">
                <div class="flag" @click="switchTokhmer()"
                    :class="{ 'bg-orange' : locale == 'km'}"
                >
                    <img src="@/assets/img/flag/cambodia_flag.svg" alt="cambodia-flag">
                    <span>ភាសាខ្មែរ</span>
                </div>
                <div class="flag" @click="switchToEnglish()"
                    :class="{ 'bg-orange' : locale == 'en'}"
                >
                    <img src="@/assets/img/flag/en_flag.svg" alt="english-flag">
                    <span>English</span>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useI18n } from 'vue-i18n';
const {locale,t} = useI18n();
const switchLanguage = () => {
    locale.value = locale.value == 'en' ? 'km' : 'en';
}

const switchToEnglish = () => {
    locale.value = 'en'

}
const switchTokhmer = () => {
    locale.value = 'km'

}


</script>



<style scoped>
.head-wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-left: 9px solid var(--orange);
    padding-left: 20px;
    
    .flag{
        height: 35px;
        border: 2px dashed var(--orange);;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        padding: 5px 10px;
        transition: all 0.3s ease-in-out;
        color: var(--orange);
        
        &:hover{
            background-color: var(--orange);
            color: var(--white);
        }

        img{
            /* width: 100%; */
            height: 100%;
        }
 
    }
}

</style>