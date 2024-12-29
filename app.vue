<template>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>

<script setup lang="ts">
const userStore = useUser()
const route = useRoute()
onMounted(async()=>{
   await userStore.autoLogin(route.path)
})
</script>
<style lang="scss">
@use "~/assets/css/tailwind.css";
@use "~/assets/css/style.scss";
</style>

