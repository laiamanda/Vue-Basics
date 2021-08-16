const app = Vue.createApp({
    data(){
        return{
            tasks: []
        };
    },
    methods: {
        addTask(){
            this.tasks.push(task);
        }
    }
});

app.mount('#assignment');