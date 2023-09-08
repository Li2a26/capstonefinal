<template lang="">
    <div class="all" >
        <div class="container d-flex justify-content-center text-align-center align-items-center" >
<div class="card">
    <div class="row d-flex justify-content-center text-align-center align-items-center">
    <div class="col">
        
        <h1> Register </h1>

        <form class="form-inline" action="/action_page.php" @submit.prevent="register">
  <div class="form-group">
    <!-- <label for="email">Email address:</label> -->
    <input type="name" class="form-control" id="firstName" placeholder="Your Name" v-model="firstName">
  </div>
  <br>
  <div class="form-group">
    <!-- <label for="email">Email address:</label> -->
    <input type="surname" class="form-control" id="lastName" placeholder="Surname" v-model="lastName">
  </div>
  <br>
  <div class="form-group">
    <!-- <label for="email">Email address:</label> -->
    <input type="role" class="form-control" id="userRole" placeholder="eg. Admin" v-model="userRole">
  </div>
  <br>
  <div class="form-group">
    <!-- <label for="email">Email address:</label> -->
    <input type="email" class="form-control" id="emailAdd" placeholder="@gmail.com" v-model="emailAdd">
  </div>
  <br>
  <div class="form-group">
    <!-- <label for="pwd">Password:</label> -->
    <input type="password" class="form-control" id="userPass" placeholder="Enter password" v-model="userPass">
  </div>
  <br>
  <div class="form-group">
    <!-- <label for="pwd">Password:</label> -->
    <input type="picture" class="form-control" id="userProfile" placeholder="url" v-model="userProfile">
  </div>
  <div class="checkbox">
    <label><input type="checkbox"> Save Info</label>
  </div>
  <button type="submit" class="btn btn-default">Register</button>
</form>


    </div>
    <div class="col">
      <img class="mona" src="https://i.postimg.cc/PJmgDy6m/man-with-a-pride-flag-posing-on-white-background-androgynous-man-in-crop-top-posing-in-studio-JLPSF0.jpg" alt="">
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
      firstName: "",
      lastName: "",
      userRole: "",
      emailAdd: "",
      userPass: "",
      userProfile: "",
    };
  },
  methods: {
    async register() {
      try {
        const resp = await this.$store.dispatch("register", {
          firstName: this.firstName,
          lastName: this.lastName,
          userRole: this.userRole,
          emailAdd: this.emailAdd,
          userPass: this.userPass,
          userProfile: this.userProfile,
        });
        if (resp.success) {
          await Swal.fire({
            icon: "success",
            title: "Registration successful",
            text: "You are now registered, please log in",
          });
        } else {
          await Swal.fire({
            icon: "error",
            title: "Registration failed",
            text: resp.error || "Unexpected error",
          });
        }
        this.$router.push("/login");
      } catch (e) {
        console.error("Registration error: ", e);
      }
    },
  },
};
</script>




<style scoped>


.container {
    min-height: 100vh;
    
}
.card {
    
    background-color: #e587ec;
    width: 745px;
    border: solid pink 5px;
    padding-left: 25px;
}

.mona {
    height: 500px;
}

.col {
    text-align:center
}

    
</style>