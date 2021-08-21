<template>

    <button @click="add()" :class="['btn',buttonColor]">
        {{ buttonName }}
        <i :class="[iconName,'fa-fw']"></i>
    </button>

</template>

<script>
    export default {
        name: "Button",
        props:["buttonName","buttonColor","iconName"],
        data() {
            return {
                currentId: "",
            }
        },
        methods: {
            add() {
               this.$emit("add")
            }
        },
    }
</script>

<style scoped>

</style>