<template>
<body>
    <div id="moviePoster">
    
        <img class="aRecipeForSeduction" src="@/assets/kfcmovie.jpg" />
        
    <figcaption class="caption">LINK TO <a href="https://www.youtube.com/watch?v=j0e7Bj_7T3k">A RECIPE FOR SEDUCTION </a></figcaption>
    </div>
</body>
</template>

<script>

export default {
  name: "Movie",

methods: {
 
}

}
</script>

<style scoped>

body {
    display: flex;
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
}

figcaption > a {
  text-decoration: none;
  color: white;
}

</style>