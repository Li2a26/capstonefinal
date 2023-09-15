<template>
  <div>
    <table class="container">
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" :key="index">
          <td>{{ item.prodID }}</td>
          <td>
            <img class="tableImg" :src="item.productUrl" :alt="item.productName" />
          </td>
          <td>{{ item.prodName }}</td>
          <td>{{ item.productPrice }}</td>
          <td>{{ item.quantity }}</td>
          <td>
            <button class="delete" @click="removeFromCart(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="checkout">
      <router-link to="/checkout">Checkout</router-link>
    </button>
  </div>
</template>
  
  <script>
export default {
  Name: "setCart",
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },

  // mounted() {
  //   this.$store.dispatch("getCart", this.user.userID);
  // },

  methods: {
    removeFromCart(index) {
      this.$store
        .dispatch("removeFromCart", index)
        .then(() => {

        })
        .catch((error) => {
          console.error("Error removing item from cart:", error);
        });
    },
  },
};
</script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata&family=Montserrat:wght@100;200&display=swap');
.tableImg {
  width: 20%;
}

.container {
  margin-top: 50px;
}

table {
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

th,
td,
tr {
  border: 10px solid pink;
}

td {
  font-weight: 600;
  color: pink;
}

.checkout {
  margin: 30px 0 30px 0;
}

.delete,
.checkout {
  background-color: #d914e7;
  color: pink;
  text-align: center;
  font-family: Inter;
  font-size: 20px;

  line-height: normal;

  border: 20px;
  padding: 3px 3px 3px 3px;
}
</style>
