<template>
    <div>
       <table>
            <h2>Documentation of the 16-year Losing Streak</h2>
            <div class="title">
                <span class="button" v-on:click="decreaseSeason()" >
                    <span class="item">{{$store.state.standings[this.previous].years}}</span> 
                    <span class="direction">&#171;</span>
                </span>
                    <span class="item">{{$store.state.standings[this.index].years}}</span>
                <span class="button" v-on:click="increaseSeason()">
                    <span class="direction">&#187;</span> 
                    <span class="item">{{$store.state.standings[this.next].years}}</span>
                </span>
            </div>
            <tr>
                <th>Year</th>
                <th>Percent</th>
                <th>Rank</th>
            </tr>
            <tr v-for="standing in $store.state.standings[this.index].stats" v-bind:key="standing.year">
                <td>{{standing.year}}</td>
                <td>{{standing.percent}}</td>
                <td>{{standing.rank}}</td>
            </tr>  
        </table>
    </div>
</template>

<script>

export default {
    data() {
        return {
            index: 0,
            next: 1,
            previous: 4
        }
    },
    methods: {
        increaseSeason() {
            this.previous = this.index;
            this.index = this.next;
            this.next++;
            if (this.next >= this.$store.state.standings.length) {
                this.next = 0;
            }
        },
        decreaseSeason() {
            this.next = this.index;
            this.index = this.previous;
            this.previous--;
            if (this.previous < 0) {
                this.previous = this.$store.state.standings.length - 1;
            }
        },

    }
}

</script>

<style scoped>

h2 {
    margin-bottom: 3px;
}

table {
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.title {
    margin-bottom: 20px;
    font-weight: bold;
}
  
tr {
    display: flex;
    justify-content: space-evenly;
}

td, th {
    width: 10%;
    text-align: center;
}

.button {
    color: #00000069;
    font-size: 1.5rem;
    padding: 25px;
    transition: color .6s;
}

.button:hover {
    color: #e7360c;
}

.item, .direction {
    margin: 40px;
}

.direction {
    font-size: 2.5rem;
}

@keyframes previous {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes next {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

</style>