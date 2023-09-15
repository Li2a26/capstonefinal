 
 <template lang="">
  <div class="all" >
      <div class="container d-flex justify-content-center text-align-center align-items-center" >
<div class="card">
  <div class="row d-flex justify-content-center text-align-center align-items-center">
  <div class="col">
      
      <h1>Login </h1>

      <form class="form-inline" action="/action_page.php" @submit.prevent="userLogin" >
<div class="form-group">
  <label for="email">Email address</label><br>
  <input
        type="email"
        name="email"
        v-model="emailAdd"
        placeholder="@gmail.com"
      />
</div>
<br>
<div class="form-group">
  <label for="pwd">Password</label><br>
  <input type="password" v-model="userPass" name="password" placeholder="enter password" />
</div><br>
<!-- <div class="checkbox">
  <label><input type="checkbox"> Remember me</label>
</div> -->
<button type="submit" class="btn btn-default">Log in</button>
<br>
<router-link to="/register"> Create Account </router-link>

</form>


  </div>
  <div class="col">
    <img class="hunny" src="https://i.postimg.cc/J0wsqYSn/er.jpg" alt="">
  </div>
</div>
</div>

      </div>


      
  </div>
</template>
<script>

import Swal from "sweetalert2";

export default {
data() {
  return {
    emailAdd: "",
    userPass: "",
  };
},
beforeCreate() {
  this.$store.dispatch("cookieCheck");
},
methods: {
  async userLogin() {
    console.log("Reached");
    try {
      const payload = {
        emailAdd: this.emailAdd,
        userPass: this.userPass,
      };
      const resp = await this.$store.dispatch("login", payload);
      console.log(resp)
      if (resp.success === true && resp.token && resp.result) {
        await Swal.fire({
          icon: "success",
          title: "Logged in Successfully",
          text: "You are now logged in!",
          background: "#995C23",
          color: "black",
        });
        this.$router.push("/");
      } else {
        const errMsg = "Unexpected error";
        await Swal.fire({
          icon: "error",
          title: "Login failed",
          text: errMsg,
        });
      }
    } catch (e) {
      console.error("Error while logging in: ", e);
    }
  },
  
  login() {
  // Your login logic here

  // If login is successful, clear the cart
  if (loginSuccessful) {
    this.$store.dispatch('clearCart');
  }
},
},

}
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inconsolata&family=Montserrat:wght@100;200&display=swap');
.container {
  min-height: 100vh;
 
}
.card {
  
 
  width: 745px;
 
  padding-left: 25px;
  border: 10px solid  #d914e7;
  background:pink;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.login {
  height: 500px;
}

.col {
  text-align:center
}

h1 {
color: #d914e7;
text-align: center;
font-family: Inter;
font-size: 45px;
/* font-style: italic; */
font-weight: 600;
line-height: normal;
-webkit-text-stroke: pink;
padding-bottom: 5%;
}

button.btn.btn-default {
background-color: #d914e7;
color:black;
text-align: center;
font-family: Inter;
font-size: 20px;
/* font-style: italic; */
font-weight: 600;
line-height: normal;

}

input {
width:80%;

border: #d914e7 solid 2px;
/* box-shadow: #462507 0.5px 0.5px 0.5px; */
}

label {
color: #d914e7;
text-align: center;
font-family: Inter;
font-size: 20px;
/* font-style: italic; */
font-weight: 600;
line-height: normal;
-webkit-text-stroke: 0.3px pink;
}

a{
padding-top: 5%;
text-decoration: none;
color: black;
}
.hunny {
  width: 100%;
}

</style>
