<template>
    <div class="container">
        <div class="row my-3">
            <div class="col-10">
                <Title title="Contact App"></Title>
            </div>
            <InputField @add="add"></InputField>
            <div class="col-8 d-flex justify-content-between">
                <p class="text-secondary fw-bold">Contact List</p>
                <p>
                    <span class="badge rounded-pill bg-primary">Total {{ totalCount}}</span>
                </p>

            </div>

            <div class="col-8">
                <table class="table table-striped table-bordered align-middle">
                    <thead>
                    <tr>
                        <th class="text-primary">
                            #
                        </th>
                        <th class="text-secondary">
                            <i class="text-primary fas fa-user"></i>
                            Name
                        </th>
                        <th class="text-secondary">
                            <i class="text-primary fas fa-phone"></i>
                            Phone
                        </th>
                        <th class="text-secondary">
                            <i class="text-primary fas fa-wrench"></i>
                            Control
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(value,index) in resultArr" :class="['create',{'toDel' : value.isDelete}]" :key="index" >
                        <td>{{ value.id }}</td>
                        <td>{{ value.name }}</td>
                        <td>{{ value.phone }}</td>
                        <td class="">
                            <Button button-color="btn-outline-danger me-2" :key="value.id" @add="[del(value.id),value.isDelete = true]" icon-name="fas fa-trash-alt"></Button>
                            <Button button-color="btn-outline-info" @add="edit(value.id)" data-bs-toggle="modal" data-bs-target="#exampleModal" icon-name="fas fa-edit"></Button>

                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Contact Update</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="">
                                                <label for="userName" class="form-label">User Name</label>
                                                <input type="text" :value="editName" @keyup="isHiddenInputName=false" v-if="isHiddenInputName" autofocus id="userName" class="form-control">
                                                <input type="text" v-model="updateName"  v-else autofocus class="form-control">
                                            </div>
                                            <div class="">
                                                <label for="userPhone" class="form-label">User Phone</label>
                                                <input type="number" :value="editPhone" @keyup="isHiddenInputPhone=false" v-if="isHiddenInputPhone" id="userPhone" class="form-control">
                                                <input type="number" v-model="updatePhone"  v-else autofocus class="form-control">
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="update(editId)">Update Contact</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import Title from "./components/Title";
    import Button from "./components/Button";
    import InputField from "./components/InputField";
    export default {
      name : "App",
        components: {InputField, Button, Title},
        data() {
            return {
                id : 0,
                resultArr : [],
                isHiddenInputName : true,
                isHiddenInputPhone : true,
                editId : "",
                editName : "",
                editPhone : "",
                updateName : "",
                updatePhone : "",
            }
        },
        computed: {
            totalCount() {
                return this.resultArr.length;
            }
        },
        methods: {
            add(x) {
                this.id++;
                this.resultArr.push(
                    {"id" : this.id ,"name": x[0] ,"phone": x[1], "isDelete" : false},
                )
            },
            del(x) {
                let newArr = [];
                if (confirm("Are you sure?")){

                    setTimeout(()=>this.resultArr =  this.resultArr.filter(el => el.id !== x),100)
                }else {
                   this.resultArr = this.resultArr.map(el=>{
                       newArr.push({"id" : el.id ,"name": el.name ,"phone": el.phone, "isDelete" : false});
                   });
                   this.resultArr = newArr;
                }
            },
            edit(x) {
                let result = this.resultArr.filter(el=>el.id == x)
                this.editName = result[0].name;
                this.editPhone = result[0].phone;
                this.editId = result[0].id;
            },
            update(x) {
                this.editName = this.updateName;
                this.editPhone = this.updatePhone;
                let editArr = {id : x , name : this.editName, phone : this.editPhone};
                this.resultArr.filter(el=>el.id == x);
                this.resultArr = this.resultArr.map(el=>el.id == x ? editArr : el);
            }
        },
    }
</script>

<style>
    .create{
        animation: 0.5s fadeInDown;
    }
    .toDel{
        animation: 1s zoomOut;
    }
</style>