function getRandomValue(min, max) {
    return Math.floor(Math.random()*(max-min)+min)
}

const app = Vue.createApp({
    data() {        
        return {
            playerHealth: 100,
            monsterHealth: 100,
        }
    },
    methods: {
        attackMonster() {
            const damageValue = getRandomValue(10,20)
            this.monsterHealth -= damageValue
            this.attackPlayer()
        },
        attackPlayer() {
            const damageValue = getRandomValue(8,16)
            this.playerHealth -= damageValue
        }
    },
    computed: {
        monsterBarStyles() {
            return {
                width: this.monsterHealth + '%'
            }
        },
        playerBarStyles() {
            return {
                width: this.playerHealth + '%'
            }
        }
    }
});

app.mount('#game');
