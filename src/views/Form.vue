<template>
  <div class="about">
    <div class="rightlane">
      <div class="disclaimer">
        <h5>Legal Disclaimer</h5>
        <p class="fine1">If you or a loved one has suffered from the Curse of the Colonel, you may to be entitled to emotional compensation. 
        'the Colonel' is a rare curse linked to fried chicken exposure. 
        Exposure to fried chicken in Japanese KFCs or Baseball Stadia may put you at risk. 
        Please fill out the following form today to get a free consultation and emotional information packet.</p>
      </div>
      <div class="colorswatch">
        {{this.FavoriteNumber}}
      </div>
    </div>
    <form action="https://localhost:3000/api/404" method="POST" v-on:submit.prevent="dontSubmit();" >
        <h4>Curse Exposure Assessment Form</h4>
        Please fill the following form to the best of your curse addled abilities:<br><br>
        <span>
          <label for="userName">Full Legal Name</label>
          <input name="userName" type="text" v-model="formformation.userName" required/>
        </span>
        <span>  
          <label for="emailAddress">Full Legal Email</label>
          <input name="emailAddress" type="email" v-model="formformation.emailAddress" required/>
        </span>
        <span>
          <label for="DOBirth">Select Your Legal Date of Birth</label>
          <input name="DOBirth" type="date" v-model="formformation.DOBirth" />
        </span>
        <span>
          <label for="favouriteColour">What Color Do You 'Think' You Like</label>
          <input name="favouriteColour" type="color" v-model="formformation.favouriteColour" />
        </span>
        <span>
          <label for="favouriteNumb">Choose Your Least Hated Number</label>
          <input name="favouriteNumb" type="number" v-model="formformation.favouriteNumb" />
        </span>
        <p class="fine2">
          <span>
            <h5>TO SUBMIT THIS FORM, YOU MUST CHECK THE FOLLOWING BOXES</h5>
          </span>
          <span>
            <label for="isValid">THE DATA IS ACCURATE TO THE BEST OF MY CURSE ADDLED ABILITIES: </label>
            <input class="check" name="isValid" type="checkbox" v-model="formformation.isValid" required/>
          </span>
          <span>
            <label for="isFreeWill">I AM NOT UNDER DURESS BY ANY KFC ENTITIES OR THEIR REPRESENTATIVES:</label>
            <input class="check" name="isFreeWill" type="checkbox" v-model="formformation.isFreeWill" required/>
          </span>
        </p>
        <span class="submit">
          <input name="Submit" type="submit">
        </span>
        <span class='fine1 notice'> NOTICE: SUBMIT does not actually connect anywhere. </span>
    </form>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      formformation: {
        userName: "",
        emailAddress: "",
        DOBirth: "",
        favouriteColour: "#ffffff",
        favouriteNumb: 0,
        isValid: false,
        isFreeWill: false,
        },
        FavoriteNumber: "",    
      }
  },
  methods: {
    clearForm() {
      this.formformation = {
        userName: "",
        emailAddress: "",
        DOBirth: "",
        favouriteColour: "#ffffff",
        favouriteNumb: 0,
        isValid: false,
        isFreeWill: false,
        };
    },
    dontSubmit() {
      alert("Submit does not actually submit the information anywhere. This is purely for demonstration purposes only.");
      document.querySelector("#app > div > div > div > div.colorswatch").style.background = this.formformation.favouriteColour;
      this.FavoriteNumber = this.formformation.favouriteNumb;
      this.clearForm();
    },
  },
  computed: {
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
  padding: 20px 40px 20px 20px;
  margin: -10px;
  height: 100vh;
}

h4 {
  margin-bottom: 5px;
}

.rightlane {
  width: 40%;
  display: flex;
  flex-direction: column;
}

.colorswatch {
  background: #a3080c;
  border: 5px solid #a3080c;
  border-radius: 0px 0px 25px 0px;
  padding: 50px;
  font-size: 5rem;
  text-shadow: 2px 2px black, 2px -2px black, -2px -2px black, -2px 2px black, 0px 2px black, 0px -2px black, -2px 0px black, -2px 0px black;
  color: white;}

.disclaimer {
  background: #a3080c;
  color: white;
  border: 5px solid #a3080c;
  border-radius: 0px 25px 0px 0px;
  padding: 0px 10px 0px 5px;
}

.disclaimer>p {
  text-align: justify;
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

form>span:not(.submit) {
  display: flex;
  flex-direction: row;
  align-content: center;
  padding: 5px;
  margin: 2px;
}

form>span>label {
    width: 50%;
    margin-right: 20px;
    text-align: right;
}

.fine1,
.fine2 {
    display: flex;
    flex-direction: column;
    font-size: 18px;
}

.fine2 {
  width: auto;
  margin:auto;
}

.fine1 span {
    margin-bottom: 0px;
}

.fine2 span:not(:first-child) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 2%;
}

.notice {
  display:flex;
  text-align: center;
  align-self:flex-end ;
}

</style>