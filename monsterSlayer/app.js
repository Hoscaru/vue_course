function getRandomValue(min, max) {
    return Math.floor(Math.random()*(max-min)+min)
}

const app = Vue.createApp({
    data() {        
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
        }
    },
    methods: {
        attackMonster() {
            const damageValue = getRandomValue(12,6)
            this.monsterHealth -= damageValue
            this.attackPlayer()
        },
        attackPlayer() {
            this.currentRound++
            const damageValue = getRandomValue(12,6)
            this.playerHealth -= damageValue
        },
        specialAttackMonster() {
            const damageValue = getRandomValue(10,25)
            this.monsterHealth -= damageValue
            this.attackPlayer()
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
        },
        specialAttackAvailable() {
            return this.currentRound % 3 !== 0
        }
    }
});

app.mount('#game');
