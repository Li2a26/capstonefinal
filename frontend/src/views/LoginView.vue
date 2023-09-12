 <template>
  <div>
    <div  class="container d-flex justify-content-center text-align-center align-items-center" >
    <div class="card animate__animated animate__slideInLeft">
       <h4 class="text-center">Welcome Back</h4>
        <form @submit.prevent="login">
      <input
        type="text"
        v-model="form.emailAdd"
        placeholder="Email"
        autocomplete="username"
      />
      <input
        type="password"
        v-model="form.userPass"
        placeholder="Password"
        autocomplete="current-password"
      />
      <button type="submit">Login</button>
     <p> Don't have an account?<router-link to="register">Register</router-link></p>
      <p v-if="loginError" class="error-message">{{ loginError }}</p>
    </form>
    <div class="col">
      <img class="pink" src="https://i.postimg.cc/J0wsqYSn/er.jpg" alt="">
    </div>
    </div>
  </div>
  
  </div>
 
  </template>
  <script>
  import { mapActions } from "vuex";
  export default {
    data() {
      return {
        form: {
          emailAdd: "",
          userPass: "",
        },
        loginError: null,
      };
    },
    methods: {
      ...mapActions(["loginUser"]),
      async login() {
        try {
          const response = await this.loginUser({
            emailAdd: this.form.emailAdd,
            userPass: this.form.userPass,
          });
          if (
            response &&
            response.token &&
            response.status === 200 &&
            response.data
          ) {
            const token = response.token;
            this.$cookies.set("userToken", token);
            const userData = response.data;
            localStorage.setItem("userData", JSON.stringify(userData));
            this.$router.push("/");
          } else {
            this.$router.push("/");
            console.log(response);
          }
        } catch (error) {
          if (error.response && error.response.status === 401) {
            this.loginError = "Log Err";
          } else {
            console.log(error);
          }
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

.pink {
    height: 500px;
    width: 100%;
}

.col {
    text-align:center
}

    
</style> 
