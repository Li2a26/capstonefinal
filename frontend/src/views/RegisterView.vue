<template lang="">
    <!-- <div class="all" >
        <div class="container d-flex justify-content-center text-align-center align-items-center" >
<div class="card">
    <div class="row d-flex justify-content-center text-align-center align-items-center">
    <div class="col">
        
        <h1> Register </h1>

        <form class="form-inline" action="/action_page.php" @submit.prevent="register">
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="name" class="form-control" id="firstName" placeholder="Your Name" v-model="firstName">
  </div>
  <br>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="surname" class="form-control" id="lastName" placeholder="Surname" v-model="lastName">
  </div>
  <br>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="role" class="form-control" id="userRole" placeholder="eg. Admin" v-model="userRole">
  </div>
  <br>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="emailAdd" placeholder="@gmail.com" v-model="emailAdd">
  </div>
  <br>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="userPass" placeholder="Enter password" v-model="userPass">
  </div>
  <br>
  <div class="form-group">
    <label for="pwd">Password:</label>
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


        
    </div> -->
  <div class="registration">
    <h2 class="text-center">Register</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          v-model="form.firstName"
          required
          class="input"
        />
      </div>
      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          v-model="form.lastName"
          required
          class="input"
        />
      </div>
      <div class="form-group">
        <label for="gender">Gender:</label>
        <input type="text" id="gender" v-model="form.gender" class="input" />
      </div>
      <div class="form-group">
        <label for="userDOB">Date of Birth:</label>
        <input type="date" id="userDOB" v-model="form.userDOB" class="input" />
      </div>
      <div class="form-group">
        <label for="userRole">User Role:</label>
        <input
          type="text"
          id="userRole"
          v-model="form.userRole"
          class="input"
        />
      </div>
      <div class="form-group">
        <label for="emailAdd">Email:</label>
        <input
          type="email"
          id="emailAdd"
          v-model="form.emailAdd"
          required
          class="input"
        />
      </div>
      <div class="form-group">
        <label for="userPass">Password:</label>
        <input
          type="password"
          id="userPass"
          v-model="form.userPass"
          required
          class="input"
        />
      </div>
      <div class="form-group">
        <label for="profileUrl">Profile URL:</label>
        <input
          type="text"
          id="profileUrl"
          v-model="form.profileUrl"
          class="input"
        />
      </div>
      <button type="submit">Register</button>
       <p> You have an account?<router-link to="login">Login</router-link></p>
    </form>
    <p v-if="registrationError" class="error">{{ registrationError }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        gender: "",
        userDOB: "",
        userRole: "",
        emailAdd: "",
        userPass: "",
        profileUrl: "",
      },
      registrationError: null,
    };
  },
  methods: {
    async registerUser() {
      this.registrationError = null;
      console.log(this.registrationError);
      try {
        const response = await this.$store.dispatch("registerUser", this.form);
        console.log(response);
        this.$router.push("/login");
      } catch (error) {
        this.registrationError =
          "Registration failed. Please check your inputs and try again.";
      }
    },
  },
};
</script>
REGISTERR




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