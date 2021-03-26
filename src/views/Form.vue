<template>
  <div class="about">
    <div class="disclaimer">
      <h5>Legal Disclaimer</h5>
      <p class="fine1">If you or a loved one has suffered from the Curse of the Colonel, you may to be entitled to emotional compensation. 
      'the Colonel' is a rare curse linked to fried chicken exposure. 
      Exposure to fried chicken in Japanese KFCs or Baseball Stadia may put you at risk. 
      Please fill out the following form today to get a free consultation and emotional information packet.</p>
    </div>
    <form action="https://localhost:3000/api/404" method="POST" v-on:submit.prevent="dontSubmit();">
        <h4>Curse Exposure Assessment Form</h4>
        Please fill the following form to the best of your curse addled abilities:<br><br>
        <span>
          <label for="useName">Full Legal Name</label>
          <input name="userName" type="text" required/>
        </span>
        <span>  
          <label for="emailAddress">Full Legal Email</label>
          <input name="emailAddress" type="email" required/>
        </span>
        <span>
          <label for="DOBirth">Select Your Legal Date of Birth</label>
          <input name="DOBirth" type="date"/>
        </span>
        <span>
          <label for="favouriteColour">What Color Do You 'Think' You Like</label>
          <input name="favouriteColour" type="color"/>
        </span>
        <span>
          <label for="favouriteNumb">Choose Your Least Hated Number</label>
          <input name="favouriteNumb" type="number"/>
        </span>
        <p class="fine1">
          <span>
            <h5>TO SUBMIT THIS FORM, YOU MUST CHECK THE FOLLOWING BOXES</h5>
          </span>
          <span>
            <label for="isValid">THE DATA IS ACCURATE TO THE BEST OF MY CURSE ADDLED ABILITIES: </label>
            <input name="isValid" type="checkbox" required/>
          </span>
          <span>
            <label for="isFreeWill">I AM NOT UNDER DURESS BY ANY KFC ENTITIES OR THEIR REPRESENTATIVES:</label>
            <input name="isFreeWill" type="checkbox" required/>
          </span>
        </p>
        <span>
          <input name="Submit" type="submit">
        </span>
        <br>
        <span class='fine1'> NOTICE: SUBMIT does not actually connect anywhere. </span>
    </form>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    clearForm() {
    },
    dontSubmit() {
    },
  },
  computed: {
    background(){
      return true
    },
  }
}
</script>

<style>
/*Form View Style*/

.about {
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
}

h4 {
  margin-bottom: 5px;
}

.disclaimer {
  width: 40%;
  background: #a3080c;
  color: white;
  border: 5px solid #a3080c;
  border-radius: 0px 25px 25px 0px;
  padding: 0px 10px 0px 5px;
}

.outerBox {
  display: flex;
  justify-content: center;
}

form {
    display: flex;
    flex-direction: column;
    background: linear-gradient(#f5d4b7, #fff1e2);
    border: 5px solid #a3080c;
    border-radius: 25px 0px 0px 25px;
    padding: 10px;
    width: 80%;
}

form>span {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  padding: 5px;
  margin: 2px;
}

label {
    margin-right: 20px;
    text-align: right;
}

.fine1 {
    display: flex;
    flex-direction: column;
    font-size: 18px;
}

.fine1 span {
    margin-bottom: 0px;
}

</style>