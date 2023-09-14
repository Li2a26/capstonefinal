
<template>
    <div >      
        <table class="container">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in getCart" :key="product.productID">
            <td><img class="tableImg" :src="product.productUrl" :alt="product.productName" /></td>
            <td>{{ product.productName }}</td>
            <td>{{ product.amount }}</td>
            <td>{{ product.quantity }}</td>
            <td>
              <button class="delete" @click="removeFromCart(product.cartID)">Delete</button>
            </td>
          </tr>
          
        </tbody>
  
        <button class="checkout">
          <router-link to="/checkout" @click="checkout" > Checkout </router-link>
        </button>    
      </table>
    </div>
  
      
  
    <!-- </div> -->
  </template>
  
  <script>
  export default {
      Name: 'setCart',
      computed: {
        getCart() {        
          return this.$store.state.cart
        },
        user(){
          console.log(this.$store.state.userData.userID)
          return this.$store.state.userData
        },
        cartTotalPrice() {
        return this.$store.getters.cartTotalPrice;
      },
      
      },
      
      mounted() {
        this.$store.dispatch('getCart', this.user.userID)
      },
      methods: {
  
      removeFromCart(cartID) {
      const userID = this.user.userID;
      
      this.$store.dispatch('removeFromCart', { userID, cartID })
        .then(() => {
          // Optional: Perform any additional actions after successful removal
        })
        .catch((error) => {
          console.error('Error removing item from cart:', error);
        });
    },
    },
  }
  </script>
  <style scoped>
  
  
  .tableImg {
    width: 20%;
  }
  
  .container {
    margin-top: 50px;
  }
  
  table{
    width: 100%;
  }
  
  tbody {
    text-align: center;
    
  }
  
  thead {
    color: #d914e7;
  text-align: center;
  
  font-size: 35px;
  font-weight: 400;
  line-height: normal;
  
  
  }
  
  th, td, tr {
   
    border: 10px solid pink;
  
  }
  
  td {
    font-weight: 600;
    color: pink;
  }
  
  
  
  .checkout {
    margin: 30px 0 30px 0 ;
    
  }
  
  .delete, .checkout {
    background-color: #d914e7;
    color:pink;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  
  line-height: normal;
  
  border: 20px;
  padding: 3px 3px 3px 3px;
  }
  
  </style>
<!-- <template>
    <div>
      <div v-if="cart" class="row p-4 justify-content-evenly">
        <cart />
      </div>
      <div v-else>Cart is empty.</div>
    </div>
  </template>
  <script>
  import cart from "@/components/CartComp.vue";
  export default {
    computed: {
      allCart() {
        return this.$store.state.cart;
      },
      cart() {
        return this.allCart || [];
      },
    },
    // mounted() {
    //   this.$store.dispatch("getCart");
    // },
    mounted() {
      this.$store.dispatch("getCart");
    },
    components: { cart },
  }; -->
  <!-- </script> -->