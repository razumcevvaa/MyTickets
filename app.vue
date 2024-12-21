<template>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>

<script setup lang="ts">
const userStore = useUser()
onMounted(async()=>{
   await userStore.autoLogin()
})
</script>
<style lang="scss">
@use "~/assets/css/tailwind.css";
@use "~/assets/css/style.scss";
</style>

