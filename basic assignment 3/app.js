const app = Vue.createApp({
    data(){
        return{
            result: 0
        };
    },
    methods: {
        addFive(){
            return result = result + 5;
        },
        addOne(){
            return result++;
        }
    }
});

app.mount('#assignment');