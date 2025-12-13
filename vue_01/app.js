const app = Vue.createApp({
    data() {
        return {
            tasksA: "Ir al gym",
            tasksB: "Comer sushi",
            vueLink: "https://vuejs.org/",
        }
    },
    methods: {
        showTasks() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                this.goalA = "Ir a la playa";
                return this.goalA;
            } else {
                this.goalA = "Ir al maraton";
                return this.goalA;
            }
        }
    }
});

app.mount('#task');