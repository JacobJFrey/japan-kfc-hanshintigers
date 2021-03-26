<template>
  <div class="home">
    <p>
        One affectation Japanese have with Western Culture is KFC Chicken. 
        Every Christmas, an estimated 3.6 million Japanese families enjoy KFC chicken in what has become a nationwide tradition.
        So, it is not surprising there would be at least one urban legend surrounding KFC and Colonel Sanders.
    </p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>

.caption {
  font-size: 1rem;
}

.home {
  background-color: white;
  background-image: url("../assets/JapanBacker.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  margin: -10px;
}

.home {
  display: flex;
  justify-content: center;
}

p {
  width: 69%;
  height: fit-content;
  text-align: justify;
  font-size: 1.5rem;
  background-image:radial-gradient(circle,#fff2,#fff4, #fff6 );
  padding: 20px;
  text-shadow: 2px 2px 2px #fffa;
  border-radius: 20px;
  color: black;
  box-shadow: 3px 4px 7px #0008;
}

a {
  text-decoration: none;
  text-align: center;
  color: #e7360c;
}

</style>