<template>
    <h1>List of User</h1>
    <active-user :username="user.name" :userAge="user.age" ></active-user>
    <user-data @set-data="setUserData"></user-data>
</template>

<script>
    export default{
        data(){
            return{
                user: {
                    name: "Amanda",
                    age: "22"
                }
            };
        },
        methods:{
            setUserData(name,age){
                this.user = {
                    name: name,
                    age: age
                };
            },
        },
    };
</script>