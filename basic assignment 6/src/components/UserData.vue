<template>
  <form @submit.prevent="submitData">
    <label>Username</label>
    <input type="text" placeholder="Enter your name" v-model="enteredName" />

    <label>Age</label>
    <input type="text" placeholder="Enter your age" v-model="enteredAge" />

    <button> Set User Data </button>
  </form>
</template>

<script>
    export default{
      emits:['set-data'],
      data(){
        return{
          enteredName: '',
          enteredAge: ''
        };
      },
      methods: {
        submitData() {
          this.$emit('set-data', this.enteredName, this.enteredAge);
        }
      }
    }
</script>

<style>

html{
    font-family: sans-serif;
}
form{
    margin: 2rem auto;
    max-width: 40rem;
    border-radius: 12px;
    border: 1px solid #ccc;
    padding: 1rem;
}
</style>