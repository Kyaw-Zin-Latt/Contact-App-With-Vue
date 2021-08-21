<template>
    <div class="">
        <h1 class="text-secondary">
            <i class="fas fa-user-circle text-primary"></i> {{ title }}
        </h1>
    </div>
</template>

<script>
    export default {
        name: "Title",
        props:["title"],
    }
</script>

<style scoped>

</style>