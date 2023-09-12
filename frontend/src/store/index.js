import { createStore } from "vuex";
// import axios from "axios";
// import Cookies from "js-cookie";

export default createStore({
  state: {
    products: null,
    product: null,
    // users: null,
    // user: null,
    users: null,
    token: null,
    isLoggedIn: false,
    cart: [],
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
      state.products.sort((a, b) => {
        return a.Price - b.Price;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    },
    //CART
    setCart(state, cart) {
      state.cart = cart;
    },
    // addToCart(state, product) {
    //   state.cart.push(product);
    // },
    addToCart(state, product) {
      const existingProduct = state.cart.find(
        (item) => item.prodID === product.prodID
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        product.quantity = 1;
        state.cart.push(product);
      }
    },
    updateCartItemQuantity(state, { prodID, prodQUANTITY }) {
      const cartItem = state.cart.find((item) => item.prodID === prodID);
      if (cartItem) {
        cartItem.quantity = prodQUANTITY;
      }
    },
    removeItem(state, cartID) {
      const index = state.cart.findIndex((item) => item.cartID === cartID);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    setUserFromLocalStorage(state) {
      const token = localStorage.getItem("userToken");
      if (token) {
        state.token = token;
        state.isLoggedIn = true;
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (userData) {
          state.user = userData;
        }
      }
    },
    setUser(state, user) {
      state.user = user;
      state.isLoggedIn = true;
    },
    setToken(state, token) {
      state.token = token;
    },
    clearUser(state) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
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
        const response = await fetch(
          `https://lisambuwa.onrender.com/products/${id}`
        );
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
        .then((users) => context.commit("setUsers", users.results));
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
        const response = await axios.post("https://lisambuwa.onrender.com/register", userData);
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
        const response = await axios.post("https://lisambuwa.onrender.com/login", credentials);
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
    async getCart({ commit }) {
      try {
        const response = await axios.get(`${baseUrl}cart`);
        commit("setCart", response.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    },
    async addToCart({ commit, state }, product) {
      try {
        if (!state.cart) {
          console.error("Cart is not initialized.");
          return false;
        }
        const response = await axios.post(`${baseUrl}cart`, product);
        console.log(product);
        if (response.status === 200) {
          commit("addToCart", response.data);
          console.log("addToCart", response.data);
          await this.dispatch("getCart");
          Swal.fire({
            icon: "success",
            title: "Added to Cart",
            text: "The product has been added to your cart.",
          });
          return true;
        } else {
          console.error("Error adding to cart:", response.statusText);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "An error occurred while adding the product to your cart.",
          });
          return false;
        }
      } catch (error) {
        console.error("Error adding to cart:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while adding the product to your cart.",
        });
        throw error;
      }
    },
    async removeItem({ commit }, cartID) {
      try {
        await axios.delete(`${baseUrl}cart/${cartID}`);
        commit("removeItem", cartID);
        console.log(cartID);
        Swal.fire({
          icon: "success",
          title: "Item Removed",
          text: "The item has been successfully removed from the cart.",
        });
      } catch (error) {
        console.error("Error removing from cart:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while removing the item from the cart.",
        });
      }
    },
    // removeItem(state, crt) {
    //   const existingProduct = state.cart.find(
    //     (crt) => crt.prodID === crt.prodID
    //   );
    //   if (existingProduct) {
    //     existingProduct.quantity += 1;
    //   } else {
    //     state.cart.push({ ...product, quantity: 1 });
    //   }
    // },
    async updateCartItemQuantity(
      { commit, state },
      { cartID, prodID, quantity }
    ) {
      try {
        const response = await axios.patch(`${baseUrl}cart/${prodID}`, {
          quantity,
        });
        if (response.status === 200) {
          // commit("updateCartItemQuantity", { prodID, quantity });
          const cartItem = state.cart.find(
            (item) => item.cartID === cartID && item.prodID === prodID
          );
          if (cartItem) {
            cartItem.quantity = quantity;
            commit("setCart", [...state.cart]);
          }
          console.log(cartID);
        } else {
          console.error(
            "Error updating cart item quantity:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error updating cart item quantity:", error);
        throw error;
      }
    },
    //User
    //register
    async registerUser({ commit }, userData) {
      try {
        const response = await axios.post(`${dbConnection}register`, userData);
        const user = response.data;
        commit("setUser", user);
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Successful Registration ",
            text: "You have registered successfully .",
          });
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
        const response = await axios.post(`${dbConnection}login`, credentials);
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
            text: "You have logged in successfully .",
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
    logout({ commit }) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userData");
      commit("clearUser");
      window.location.reload();
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
