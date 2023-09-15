<template>
  <div class="code animate__animated animate__slideInLeft">
    <div class="container d-flex justify-content-center align-items-center">
      <div class="card">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col">
            <h1>Register</h1>

            <form @submit.prevent="register">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Your Name" v-model="firstName" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Surname" v-model="lastName" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="eg. Admin" v-model="userRole" />
              </div>
              <div class="form-group">
                <input type="email" class="form-control" placeholder="@gmail.com" v-model="emailAdd" />
              </div>
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Enter password" v-model="userPass" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="URL" v-model="userUrl" />
              </div>
              <button type="submit" class="btn btn-default">Register</button>
            </form>
          </div>
          <div class="col">
            <img class="hunny" src="https://i.postimg.cc/PJmgDy6m/man-with-a-pride-flag-posing-on-white-background-androgynous-man-in-crop-top-posing-in-studio-JLPSF0.jpg" alt="" />
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
      userUrl: "",
    };
  },
  methods: {
    async register() {
      try {
        const resp = await this.$store.dispatch("registerUser", {
          firstName: this.firstName,
          lastName: this.lastName,
          userRole: this.userRole,
          emailAdd: this.emailAdd,
          userPass: this.userPass,
          userUrl: this.userUrl,
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
  width: 745px;
  padding-left: 25px;
  border: 5px solid pink;
  background: #d914e7;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  text-align: center;
}

.col {
  text-align: center;
}

h1 {
  color: pink;
  text-align: center;
  font-family: Inter;
  font-size: 45px;
  font-weight: 600;
  line-height: normal;
  -webkit-text-stroke: 1px pink;
  padding-bottom: 5%;
}

button.btn.btn-default {
  background-color: pink;
  color: black;
  text-align: center;
  border: 10px;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
}

button.btn.btn-default:hover {
  background-color: #d914e7;
}

input {
  width: 80%;
  background-color: #f6f4f2;
  border: pink 2px;
  text-align: center;
  margin: auto;
}

.hunny {
  width: 100%;
}
.animate__animated animate__slideInLeft {
  --animate-duration: 2s;
}
</style>
