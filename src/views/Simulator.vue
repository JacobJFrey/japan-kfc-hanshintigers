<template>
<body>
    <div id="fingerlickinggood">
      <a v-on:click="toURL($store.state.URLS.steam_simulator)">
        <img class="colonelDateApp" src="https://cdn.glitch.com/61974d1d-2cef-4054-87ec-53d80a05b1a0%2Fcolonelsanders.webp?v=1594221817675" /> 
        <figcaption class="caption">image from <span class="captionname">I LOVE YOU, COLONEL SANDERS! A FINGER LICKIN' GOOD DATING SIMULATOR</span> </figcaption>
      </a>
      <p>
        <a v-on:click="toURL($store.state.URLS.steam_simulator)">I Love You, Colonel Sanders! A Finger Lickin' Good Dating Simulator</a> is an otome dating sim developed by <a v-on:click="toURL($store.URLS.psyop_com)">Psyop</a>. The video game was commissioned by the restaurant chain <a v-on:click="toURL($store.state.URLS.KFC_com)">KFC</a> and released for free on <a v-on:click="toURL($store.state.URLS.steam_com)">Steam</a> on September 24, 2019. 
        <a class="reference" v-on:click="toURL($store.state.URLS.wiki_simulator_URL)" >Wikipedia</a>
        <table>
        <tr><td>Initial release date:</td><td>September 24, 2019</td></tr>
        <tr><td>Developer:</td><td><a v-on:click="toURL($store.URLS.psyop_com)"> Psyop</a></td></tr>
        <tr><td>Mode:</td><td> Single-player video game</td></tr>
        <tr><td>Publishers:</td><td><a v-on:click="toURL($store.state.URLS.KFC_com)">KFC, KFC Corporation</a></td></tr>
        <tr><td>Genres:</td><td> Dating sim, Adventure game, Indie game, Casual game, Simulation Game, Advertising in video games, Simulation</td></tr>
        <tr><td>Platforms:</td><td> Microsoft Windows, macOS, Macintosh operating systems</td></tr>
        </table>
      </p>
    </div>
</body>
</template>

<script>
export default {
  name: "Simulator",
  data() {
    return {
    }
  },
methods: {
    toURL(url) {
      window.open(url);
    },
  }
}
</script>

<style scoped>

#fingerlickinggood {
  border: 4px solid #222;
  background-color: #222;
  width: 88%;
  margin-left: auto;
  margin-right: auto;
}

.colonelDateApp {
  width: 100%;
  height: auto;
}

#fingerlickinggood > figcaption > a {
  text-decoration: none;
  color: white;
}

.caption,
.reference {
  font-size: 1rem;
}

figcaption > a {
  text-decoration: none;
  color: white;
}

.captionname,
.reference {
  color: white;
}

p {
  background: black;
  padding: 20px;
  text-align: justify;
}

table {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

table>tr {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 3px;
}

table>tr>td:first-of-type {
  width: 20%;
  text-align: right;
  padding-right: 20px;
  color:white;
}

table>tr>td:last-of-type {
  width: 80%;
  text-align: left;
}

.reference {
  text-justify: auto;
}

a:hover {
  cursor: pointer;
}

p a {
  transition: color 1.5s;
}

p a:hover {
  color: #fce300;
}

</style>