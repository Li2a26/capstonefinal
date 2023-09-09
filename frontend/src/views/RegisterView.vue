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
    <h2>Register</h2>
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
        gender: "", // Add gender field
        userDOB: "", // Add userDOB field
        userRole: "", // Add userRole field
        emailAdd: "",
        userPass: "",
        profileUrl: "", // Add profileUrl field
      },
      registrationError: null,
    };
  },
  methods: {
    async registerUser() {
      this.registrationError = null;
      try {
        const response = await this.$store.dispatch("registerUser", this.form);
        this.$router.push("/login");
      } catch (error) {
        this.registrationError =
          "Registration failed. Please check your inputs and try again.";
      }
    },
  },
};
// import Swal from "sweetalert2";

// export default {
//   data() {
//     return {
//       firstName: "",
//       lastName: "",
//       userRole: "",
//       emailAdd: "",
//       userPass: "",
//       userProfile: "",
//     };
//   },
//   methods: {
//     async register() {
//       try {
//         const resp = await this.$store.dispatch("register", {
//           firstName: this.firstName,
//           lastName: this.lastName,
//           userRole: this.userRole,
//           emailAdd: this.emailAdd,
//           userPass: this.userPass,
//           userProfile: this.userProfile,
//         });
//         if (resp.success) {
//           await Swal.fire({
//             icon: "success",
//             title: "Registration successful",
//             text: "You are now registered, please log in",
//           });
//         } else {
//           await Swal.fire({
//             icon: "error",
//             title: "Registration failed",
//             text: resp.error || "Unexpected error",
//           });
//         }
//         this.$router.push("/login");
//       } catch (e) {
//         console.error("Registration error: ", e);
//       }
//     },
//   },
// };
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