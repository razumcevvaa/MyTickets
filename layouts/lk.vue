<template>
    <div class="grid">
        <NavbarLK/>
        <slot/>
    </div>
</template>

<style scoped>
.grid {
    grid-template-columns: 300px auto;
}
</style>

