<template>
<body>
    <div id="fingerlickinggood">
      <a href="https://store.steampowered.com/app/1121910/I_Love_You_Colonel_Sanders_A_Finger_Lickin_Good_Dating_Simulator">
        <img class="colonelDateApp" src="https://cdn.glitch.com/61974d1d-2cef-4054-87ec-53d80a05b1a0%2Fcolonelsanders.webp?v=1594221817675" /> 
        <figcaption class="caption">image from <span class="captionname">I LOVE YOU, COLONEL SANDERS! A FINGER LICKIN' GOOD DATING SIMULATOR</span> </figcaption>
      </a>
    </div>
</body>
</template>

<script>
export default {
  name: "Simulator",

methods: {
 
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

</style>