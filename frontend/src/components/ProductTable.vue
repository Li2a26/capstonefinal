<template>
  <div>
    <div class="body" v-if="products">
      <div class="row table-container">
        <div class="col-12">
          <h1>PRODUCTS</h1>
          <button class="addp">
            <router-link to="/admin/add/product" class="bb"> Add Product </router-link>
          </button>
        </div>
        <div class="col">
          <div class="table-responsive">
            <table class="table is-striped is-bordered mt-2 is-fullwidth text-align-center">
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
    <div v-else class="d-flex justify-content-center mb-3">
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  methods: {
    async deleteProduct(productId) {
      const success = await this.$store.dispatch("deleteProduct", productId);

      if (success) {
        // Update the product list in your component if needed.
        this.$store.dispatch("getProducts"); // You can dispatch this if you need to refresh the product list.
      } else {
        alert("Failed to delete product. Please try again.");
      }
    },
  },
};
</script>

<style scoped>
.tableImg {
  width: 85px;
}
.addp {
  background-color: #d914e7;
  border-radius: 20px;
  color: black !important;
}
.addp:hover {
  background-color: pink;
}
.bb {
  color: black;
}

.loader {
  border: 7px solid #fff9e4; /* Light grey */
  border-top: 7px solid #e587ec; /* Blue */
  border-radius: 50%;
  width: 35px;
  height: 35px;
  animation: spin 2s linear infinite;
}

@media screen and (max-width: 576px) {
  /* Apply responsive styles for small screens here */
  .table-container {
    overflow-x: auto; /* Enable horizontal scrolling on small screens */
  }

  /* Make table borders pink */
  table.table {
    border: 2px solid pink;
  }
  
  /* Style table header */
  table.table thead {
    background-color: pink;
    color: white;
  }
}
</style>
