<template>
  <div class="registration">
    <h2 class="text-center">Register</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          v-model="forms.firstName"
          required
          class="input"
        />
      </div>
      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName" 
          v-model="forms.lastName"
          required
          class="input"
        />
      </div>
      <div class="form-group">
        <label for="gender">Gender:</label>
        <input type="text" id="gender" v-model="forms.gender" class="input" />
      </div>
      <div class="form-group">
        <label for="userDOB">Date of Birth:</label>
        <input type="date" id="userDOB" v-model="forms.userDOB" class="input" />
      </div>
      <div class="form-group">
        <label for="userRole">User Role:</label>
        <input
          type="text"
          id="userRole"
          v-model="forms.userRole"
          class="input"
        />
      </div>
      <div class="form-group">
        <label for="emailAdd">Email:</label>
        <input
          type="email"
          id="emailAdd"
          v-model="forms.emailAdd"
          required
          class="input"
        />
      </div>
      <div class="form-group">
        <label for="userPass">Password:</label>
        <input
          type="password"
          id="userPass"
          v-model="forms.userPass"
          required
          class="input"
        />
      </div>
      <div class="form-group">
        <label for="profileUrl">Profile URL:</label>
        <input
          type="text"
          id="profileUrl"
          v-model="forms.profileUrl"
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
      forms: {
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
    // async registerUser() {
    //   // this.registrationError = null;
    //   // console.log(this.registrationError);
    //   try {
    //     form = {
    //     firstName: this.forms.firstName,
    //     lastName: this.forms.lastName,
    //     gender: this.forms.gender,
    //     userDOB: this.forms.userDOB,
    //     userRole: this.forms.userRole,
    //     emailAdd: this.forms.emailAdd,
    //     userPass: this.forms.userPass,
    //     profileUrl: this.forms.profileUrl
    //   };
    //     // const response = await this.$store.dispatch("registerUser", this.form);
    //     this.$store.dispatch("registerUser", form);
    //     console.log(response);
    //     this.$router.push("/login");
    //   } catch (error) {
    //     this.registrationError =
    //       "Registration failed. Please check your inputs and try again.";
    //   }
    // },
    async registerUser() {
        const form = {
          firstName: this.forms.firstName,
          lastName: this.forms.lastName,
          gender: this.forms.gender,
          userDOB: this.forms.userDOB,
          userRole: this.forms.userRole,
          emailAdd: this.forms.emailAdd,
          userPass: this.forms.userPass,
          profileUrl: this.forms.profileUrl
        };
        this.$store.dispatch("registerUser", form);
        console.log(form);
        this.$router.push("/login")
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