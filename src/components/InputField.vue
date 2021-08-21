<template>
    <div class="col-8 my-3">
        <div class="row g-3">
            <div class="col-5">
                <input type="text" placeholder="FullName" v-model="userName" autofocus id="userName" class="form-control">
            </div>
            <div class="col-6">
                <input type="number" placeholder="phone" v-model.number="userPhone" id="userPhone" class="form-control">
            </div>
            <div class="col-1">
                <button class="btn btn-outline-primary w-100" @click="add">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InputField",
        props : ["name","phone"],
        data() {
            return {
                userName: "",
                userPhone : "",
            }
        },
        methods: {
            add() {
                this.$emit("add",[this.userName,this.userPhone]);
                this.userName = "";
                this.userPhone = "";
            }
        },
    }
</script>

<style scoped>

</style>