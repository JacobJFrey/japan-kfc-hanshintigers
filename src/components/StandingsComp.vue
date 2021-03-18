<template>
    <div>
       <table>
            <h2>Documentation of the 18-year Losing Streak</h2>
            <th>
                <span class="button" v-on:click="decreaseSeason()" >&#171;</span>{{$store.state.standings[this.index].years}}<span class="button" v-on:click="increaseSeason()">&#187;</span>
            </th>
            <tr>
                <th>Year</th>
                <th>Percent</th>
                <th>Rank</th>
            </tr>
            <tr v-for="standing in $store.state.standings[this.index].stats" v-bind:key="standing.year">
                <th>{{standing.year}}</th>
                <th>{{standing.percent}}</th>
                <th>{{standing.rank}}</th>
            </tr>  
        </table>
    </div>
</template>

<script>

export default {
    data() {
        return {
            index: 0,
        }
    },
    methods: {
        increaseSeason() {
            this.index++;
            if (this.index >= this.$store.state.standings.length) {
                this.index = 0;
            }
        },
        decreaseSeason() {
            this.index--;
            if (this.index < 0) {
                this.index = this.$store.state.standings.length - 1;
            }
        }
    }
}


</script>

<style scoped>

table {
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

tr {
    display: flex;
    justify-content: space-evenly;
}

.button {
    font-size: 3rem;
    padding: 25px;
}

</style>