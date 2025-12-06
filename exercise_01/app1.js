const app = Vue.createApp({
    data() {
        return {
            name: "Oscar",
            lastName: "Rodriguez",
            age: 25,

            favoriteMovie: "https://www.imdb.com/news/ni65534589/",

        }
    },

    methods: {
        age5years() {
            return this.age + 5;
        },
        randomFavoriteNumber() {
            return Math.floor(Math.random() * 100) + 1;
        }

    }
});

app.mount('#about');
