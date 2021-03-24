<template>
  <div id="app">
    <nav>  
      <router-link v-bind:to="{name: 'Home'}">Home</router-link>
      <router-link v-bind:to="{name: 'Form'}">Form</router-link>
      <router-link v-bind:to="{name: 'Curse'}">Curse</router-link>
      <router-link v-bind:to="{name: 'Simulator'}">KFC Simulator</router-link>
      <router-link v-bind:to="{name: 'Movie'}">KFC Movie</router-link>
      <router-link v-bind:to="{name: 'DragAndDrop'}" v-show=false>Test</router-link>
      <!-- <router-link v-bind:to="{name: 'DragAndDrop'}">Test</router-link> -->
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app'
}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap');

body {
    background-color: #fce300;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-weight: 400;
    width: 100%;
    overflow-x: hidden;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 2rem;
  color: #e7360c;
  margin: 0px;
  padding: 0px;
}

nav {
  background-color: black;
  margin-top: -10px;
  margin-left: -10px;
  margin-bottom: 10px;
  border-bottom: 3px solid #e7360c;
  padding: 10px;

  display: flex;
  justify-content: space-evenly;
}

a {
  color: white;
}

h5 {
    font-weight: 300;
    font-size: 1.5rem;
    margin: 0px;
    margin-top: 15px;
}

::-webkit-scrollbar {
  width: 15px;
  background-image: linear-gradient(to right,  #444,#333, #444, #555, #666);
}

::-webkit-scrollbar-track {
  border: solid 2px black;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-image: linear-gradient(to right, #e7360c, #e7360cdd, #e7360c55);
  border-radius: 10px;
  border: inset 2px black;
}

::-webkit-scrollbar-corner {
  background: yellow;
}

</style>

