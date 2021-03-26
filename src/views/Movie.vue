<template>
<body>
    <div id="moviePoster">
      <a href="https://www.youtube.com/watch?v=j0e7Bj_7T3k" target="_blank" rel="noopener noreferrer">
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
            <p>Order a KFC bucket meal for delivery, and cozy up with Mario Lopez as Colonel Harland Sanders in the KFC-branded Lifetime Original Mini-Movie premiere</p>
            <p>Louisville, Kentucky, December 7, 2020- Kentucky Fried Chicken® and Lifetime® are teaming up to bring consumers the perfect distraction from all things 2020: the holiday Lifetime Original Mini-Movie, "A Recipe for Seduction." Featuring veteran actor and star of Lifetime's FelizNaviDAD Mario Lopez as Colonel Harland Sanders, the first-of-its kind 15-minute Lifetime Original Mini-Movie is full of mystery, suspense, deception, "fowl" play and - at the heart of it all - love and fried chicken. "A Recipe For Seduction" premieres on Lifetime Sunday, December 13 at 12 p.m. ET/PT.</p>
            <a href="https://global.kfc.com/press-releases/kfc-and-lifetime-heat-up-the-holidays-with-a-first-of-its-kind-lifetime" target="_blank" rel="noopener noreferrer">Click here to read more of the KFC Press Release...</a>
        </div>
      </div>
      <div>
        <div class="button" v-on:click="toggle('Lifetime')">
            Lifetime Channel
        </div>
        <div class="press-release" v-show="showLifetime">
            <p>Lifetime channel does not currently have a Press Release</p>
            <a href="https://www.mylifetime.com/" target="_blank" rel="noopener noreferrer"> Click here to go to the Lifetime website...</a>
        </div>
      </div>
      <div>
        <div class="button" v-on:click="toggle('UberEats')">
            Uber Eats Promotion
        </div>
        <div class="press-release" v-show="showUberEats">
            <p>The project was paired with an Uber Eats promotion, that offered customers free extra crispy tenders with an order of $20 or more on the UberEats platform.</p>
            <a href="https://www.ubereats.com/" target="_blank" rel="noopener noreferrer"> Click here to go the UberEats website....</a>
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


#moviePoster {
  border: 4px solid #222;
  background-color: #222;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  box-shadow: 2px 2px 2px black;
}

.caption {
  font-size: 1rem;
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

.press-release>p {
    margin: 10px 0px;
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