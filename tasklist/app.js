Vue.createApp({
    data(){
        return{
            tasks: [],
            newTask: '',
            toggle: true
        };
    },
    methods: {
        addTask(){
            this.tasks.push(this.newTask);
            this.newTask = '';
        },
        removeTask(idx){
           this.tasks.splice(idx,1);
        }
    }
}).mount('#app');