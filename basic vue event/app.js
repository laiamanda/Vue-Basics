const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmName(){
      this.confirmedName = this.name;
    },
    /*submitForm(event){
      alert("Hi")
    },*/
    setName(event){
      this.name = event.target.value;
    },
    addCounter(num){
      this.counter = this.counter + num;
    },
    subtractCounter(num){
      this.counter= this.counter - num;
    }
  }
});

app.mount('#events');
