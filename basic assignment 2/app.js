const app = Vue.createApp({
    data(){
        return{
            outputA: '',
            confirmedInput: ''
        };
    },
    methods: {
        settingClick(){
            alert('You clicked on me');
        },
        setOutputA(event){
            this.outputA = event.target.value;
        },
        confirmInput(){
            this.confirmedInput = this.outputA;
        }
    }
});

app.mount('#assignment');