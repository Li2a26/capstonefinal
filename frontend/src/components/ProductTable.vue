<template>
    <div >
      <div class="body" v-if="products">
        <div class="row table-container">
          <div class="col-12">
            <h1>PRODUCTS</h1>
            <button class="addp">
              <router-link to="/admin/add/product" class="bb"> Add Product </router-link>
            </button>
          </div>
          <div class="col">
            <table class="table is-striped is-bordered mt-2 is-fullwidth  text-align-center" @submit="deleteProduct">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products" :key="product.productID" class="boredom">
                  <td>{{ product.productID }}</td>
                  <td><img class="tableImg" :src="product.productUrl" alt="" /></td>
                  <td>{{ product.productNAME }}</td>
                  <td>R {{ product.productPRICE }}</td>
                  <td>{{ product.productDESC }}</td>
                  <td>
                    <!-- Edit link, you can uncomment it when needed -->
                    <!-- <button>
                      <router-link :to="{ name: 'admin edit product', params: { id : product.prodID } }"> Edit </router-link>
                    </button> -->
                    <button
                      type="submit"
                      class="btn btton"
                      @click="deleteProduct(product.productID)"
                      id="delete-row"
                    >
                      🗑️
                    </button>
                    <button
                      type="submit"
                      class="btn btton"
                      @click="editProduct(product.productID)"
                      id="add-row"
                    >
                      ✏️
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  
  // import axios from 'axios'
  
  export default {
  // props: ["products"],
  computed: {
  products() {
    return this.$store.state.products
  },
  // userRole() {
  //   return this.$store.state.userRole;
  // },
},
  
  mounted() {
  this.$store.dispatch("getProducts")
  },
  methods: {
  async deleteProduct(productId) {
    const success = await this.$store.dispatch('deleteProduct', productId);

    if (success) {
      // Update the product list in your component if needed.
      this.$store.dispatch('getProducts'); // You can dispatch this if you need to refresh the product list.
    } else {
      alert('Failed to delete product. Please try again.');
    }
  },
},
  
  
  };
  
  
  
  
  </script>
  
  <style scoped>
  .tableImg{
      width : 85px;
  }
  .addp {
    background-color:#d914e7;
  border-radius: 20px; 
  color: black !important;
}
.addp:hover {
  background-color: pink;
}
.bb {
  color: black;
}
  
  </style>