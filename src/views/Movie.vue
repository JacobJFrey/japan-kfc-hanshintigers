<template>
<body>
    <div id="moviePoster">
      <a href="https://www.youtube.com/watch?v=j0e7Bj_7T3k">
        <img class="aRecipeForSeduction" src="@/assets/kfcmovie.jpg" />        
        <figcaption class="caption">LINK TO <span class="captionname">A RECIPE FOR SEDUCTION</span> </figcaption>
      </a>
    </div>
    <article>
      <div>
        <div class="button" v-on:click="toggle('KFC')">
          KFC Press Release
        </div>
        <div class="press-release" v-show="showKFC">
          Here is the KFC Press Release: <a href="https://global.kfc.com/press-releases/kfc-and-lifetime-heat-up-the-holidays-with-a-first-of-its-kind-lifetime">KFC Press Release Link</a>
        </div>
      </div>
      <div>
        <div class="button" v-on:click="toggle('Lifetime')">
            Lifetime Press Release
        </div>
        <div class="press-release" v-show="showLifetime">
          Here is the Lifetime Press Release
        </div>
      </div>
      <div>
        <div class="button" v-on:click="toggle('UberEats')">
            Uber Eats Promotion
        </div>
        <div class="press-release" v-show="showUberEats">
            The project will be paired with an Uber Eats promotion, that offers customers free extra crispy tenders with an order of $20 or more on the delivery platform.
        </div>
      </div>

    </article>
</body>
</template>

<script>

export default {
  name: "Movie",
  data() {
    return {
      showKFC : false,
      showLifetime : false,
      showUberEats : false
    }
  },
  methods: {
    toggle(target) {
      switch (target) { 
        case "KFC":
          this.showKFC = !this.showKFC;
          break;
        case "Lifetime":
          this.showLifetime = !this.showLifetime;   
          break;
        case "UberEats":
          this.showUberEats = !this.showUberEats;
          break;
        default:
      }
    }
  }
}
</script>

<style scoped>

body {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

img {
    height: auto;
    width: 100%;
}

.caption {
  font-size: 1rem;
}

#moviePoster {
  border: 4px solid #222;
  background-color: #222;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  box-shadow: 2px 2px 2px black;
}

figcaption > a {
  text-decoration: none;
  color: white;
}

.captionname {
  color: white;
}

article {
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0px;
}

article>div {
  margin: 5px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.button {
    width: 90%;
    background: #222;
    margin: 3px 0px 0px 0px;
    text-align: left;
    padding: 3px 10px;
    transition: color .75s, text-shadow .75s;
    border-radius: 0px 10px 10px 0px;
    border: 5px solid #222;
    box-shadow: 2px 2px 2px black;
}

.button:hover {
  color: yellow;
  text-shadow: 1px -1px #e7360c, -1px 1px #e7360c, -1px -1px white, 1px 1px darkred;
}

.press-release {
    width: 85%;
    padding: 5px 20px;
    text-align: justify;
    background: white;
    color: black;
    margin: -1px 0px 5px -1px;
    font-size: .5em;
    border: 1px solid #222;
    border-radius: 0px 0px 15px 0px;
}

@keyframes shine{

  0%{background-image: linear-gradient(0deg, #fff2, #fff0, #fff0, #fff0, #fff0)}
  20%{background-image: linear-gradient(36deg, #fff4, #fff2, #fff0, #fff0, #fff0)}
  40%{background-image: linear-gradient(72deg, #fff0, #fff4, #fff2, #fff0, #fff0)}
  60%{background-image: linear-gradient(108deg, #fff0, #fff0, #fff4, #fff2, #fff0)}
  80%{background-image: linear-gradient(144deg, #fff0, #fff0, #fff0, #fff4, #fff2)}
  100%{background-image: linear-gradient(180deg, #fff0, #fff0, #fff0, #fff0, #fff4)}
}

</style>