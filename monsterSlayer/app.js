function getRandomValue(min, max) {
    return Math.floor(Math.random()*(max-min)+min)
}

const app = Vue.createApp({
    data() {        
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null
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
        },
        healPlayer() {
            this.playerHealth += getRandomValue(15,8)
        },
        startNewGame() {
            this.playerHealth = 100
            this.monsterHealth = 100
            this.currentRound = 0
            this.winner = null
        },
        surrender() {
            this.winner = 'monster'
        }
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return {
                    width: '0%'
                }
            }
            return {
                width: this.monsterHealth + '%'
            }
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return {
                    width: '0%'
                }
            }
            return {
                width: this.playerHealth + '%'
            }
        },
        specialAttackAvailable() {
            return this.currentRound % 3 !== 0
        }, 
        

    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) { 
                this.winner = 'draw'
            } else if (value <= 0) { 
                this.winner = 'monster'
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) { 
                this.winner = 'draw'
            } else if (value <= 0) { 
                this.winner = 'player'
            }
        },

    }
});

app.mount('#game');