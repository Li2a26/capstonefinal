import { createStore } from 'vuex'
// import axios from "axios"; 
// import Cookies from "js-cookie"; 

export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
  },
  getters: {},
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    
    sortProducts: (state) => {
      state.products.sort ((a, b) => {
        return a.Price - b.Price;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc= !state.asc
    },

  },
  actions: {
    getProducts: async (context) => {
      fetch("https://lisambuwa.onrender.com/products")
        .then((res) => res.json())
        .then((products) => context.commit("setProducts", products));
    },

    // getProduct: async (context, id) => {
    //   fetch("https://nodeeomp.onrender.com/products/" + id)
    //     .then((res) => res.json())
    //     .then((product) => context.commit("setProduct", product));
    // },
    getProduct: async (context, id) => {
      try {
        const response = await fetch(`https://lisambuwa.onrender.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const product = await response.json();

     
        context.commit("setProduct", product);
      } catch (error) {
        console.error(error);

      }
    },

    getUsers: async (context) => {
      fetch("https://lisambuwa.onrender.com/users")
        .then((res) => res.json())
        .then((users) => context.commit("setUsers", users));
    },
    getUser: async (context, id) => {
      try {
        const res = await fetch(`https://lisambuwa.onrender.com/users/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch user by ID");
        }
        const user = await res.json();

        context.commit("setUser", user);
      } catch (error) {
        console.error(error);
      }
    },
    //User
  //register
  async registerUser({ commit }, userData) {
    try {
      const response = await axios.post(`${baseUrl}register`, userData);
      const user = response.data;
      commit("setUser", user);
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You have successfully registered.",
        });
        this.$router.push("/login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: "An error occurred during registration.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  },
  //Login
  async loginUser({ commit }, credentials) {
    try {
      const response = await axios.post(`${baseUrl}login`, credentials);
      if (response.status === 200) {
        const { token, user } = response.data;
        console.log(response.data);
        console.log(token);
        commit("setToken", token);
        commit("setUser", user);
        // Store user data in local storage
        localStorage.setItem("userToken", token);
        localStorage.setItem("userData", JSON.stringify(response.data));
        window.location.reload();
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have successfully logged in.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred during login.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  },
  },

  modules: {},
});
//login and register
// async register(context, payload) {
//   console.log("Reached");
//   try {
//     const res = await axios.post(`https://capstone-sb96.onrender.com/users`, payload);
//     console.log("Res: ", res.data.status);
//     const { message, err, token } = res.data;
//     if (message === "An error occured") {
//       context.commit("setError", message);
//       context.commit("setRegStatus", "Not registered");
//       return { success: false, error: message };
//     } else if (token) { ``
//       context.commit("setToken", token);
//       context.commit("setRegStatus", "Registered successfully");
//       return { success: true, token };
//     } else if (err) {
//       console.error(err);
//     }
//   } catch (e) {
//     context.commit("setError", e);
//     console.log(e);
//     context.commit("setRegStatus", "Not registered");
//     throw e;
//   }
// }

// async login(context, payload) {
//   try {
//     const res = await axios.post(`https://capstone-sb96.onrender.com/user/login`, payload);
//     console.log("Res: ", res.data.status);
//     const { err, message, token, result } = res.data;
//     console.log(result);
//     if (message === "Unregistered user or incorrect password!") {
//       context.commit("setError", message);
//       context.commit("setLogStatus", "Not logged in");
//       return { success: false, error: message };
//     }
//     if (message && token && result) {
//       context.commit("setUser", result);
//       context.commit("setToken", token);
//       context.commit("setUserData", result);
//       context.commit("setLogStatus", "Logged in!");
//       Cookies.set("userToken", token, {
//         expires: 1,
//       });
//       return { success: true, token, result };
//     } else if (err) {
//       context.commit("setError", err);
//       return { success: false, error: err };
//     } else {
//       context.commit("setError", "Unknown error during login");
//       context.commit("setLogStatus", "not logged in");
//       return { success: false, error: "Unknown error" };
//     }
//   } catch (err) {
//     console.log("Error")
//   }
// }
// cookieCheck(context) {
//   const token = Cookies.get("userToken");
//   if (token) {
//     context.commit("setToken", token);
//   }
// }
// init(context) {
//   context.dispatch("cookieCheck");
// }
// async logout(context) {
//   context.commit("setToken", null);
//   context.commit("setUser", null);
//   context.commit("setUserData", null);
//   Cookies.remove("userToken");
// },





