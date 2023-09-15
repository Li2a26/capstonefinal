<template>
  <div class="d-flex justify-content-center">
    <div>
      <div class="tops">
        <input type="text" v-model="searchQuery" placeholder="Search products...🔍" />
        <button id="purple" @click="sortProducts">Sort by Price (Asc)</button>
        <button id="purple" @click="sortProducts2">Sort by Price (Desc)</button>
      </div>

      <div class="oak col mt-5">
        <div class="d-flex justify-content-center">
          <div class="row card-container" v-if="products">
            <div
              v-for="product in filteredAndSortedProducts"
              :key="product.productID"
              class="col-md-4 col-sm-6 col-12 mb-4"
            >
              <div class="product-card mx-2">
                <img :src="product.productUrl" :alt="product.productUrl" class="img-fluid picture" />
                <div class="content d-flex flex-column h-100">
                  <h3 class="title">{{ product.productNAME }}</h3>
                  <h3 class="title">{{ product.productCAT }}</h3>
                  <h3 class="title">{{ product.productTYPE }}</h3>
                  <p class="sci">R {{ product.productPRICE }}</p>
                  <router-link :to="{ name: 'product', params: { id: product.productID } }">
                    <button id="purple"  @click="View" class="viewbtn">View more</button>
                    <button id="purple"  @click="addToCart(product.productID)" class="addbtn">Add to cart</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div v-else>Loading</div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- The rest of your code remains unchanged -->



<script>
export default {
  props: ["products"],
  data() {
    return {
      searchQuery: "",
      ascending: true,
      descending: false,
    };
  },
  computed: {
    filteredAndSortedProducts() {
      let filteredProducts = this.$store.state.products || [];

      // Filter by search query
      if (this.searchQuery) {
        const searchQuery = this.searchQuery.toLowerCase();
        filteredProducts = filteredProducts.filter((product) =>
          product.productNAME.toLowerCase().includes(searchQuery)
        );
      }

      // Sort by price
      if (this.ascending) {
        filteredProducts.sort((a, b) => a.productPRICE - b.productPRICE);
      } else if (this.descending) {
        filteredProducts.sort((a, b) => b.productPRICE - a.productPRICE);
      }

      return filteredProducts;
    },
  },
  methods: {
    sortProducts() {
      this.ascending = true;
      this.descending = false;
    },
    sortProducts2() {
      this.ascending = false;
      this.descending = true;
    },
    addToCart(prodID) {
      // Ensure the user is logged in
      if (this.userData && this.userData.userID) {
        // Call the addToCart action with userID and prodID
        this.$store.dispatch("addToCart", {
          userID: this.userData.userID,
          prodID,
        });
      } else {
        // Handle the case where the user is not logged in, prompt for login, etc.
      }
    },
  },
};
</script>

<style scoped>
.product-card {
  margin-bottom: 20px; /* Add margin for spacing between cards */
  box-sizing: border-box;
  border: 1px solid #ddd;
  padding: 10px;
  height: auto;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
#purple {
  background-color: #d914e7 !important;
  border-radius: 20px;
  border: 6px pink;
  padding: 5px 15px;
}
#purple:hover {
  background-color: pink !important;
}
.button-container button {
  background-color: #d914e7 !important;
  border-radius: 20px;
  color: white;
  border: none;
  padding: 5px 15px;
}

.button-container button:hover {
  background-color: pink;
}

.tops {
  margin-top: 20px !important;
}
</style>

<style scoped>
@media screen and (max-width: 576px) {
  .product-card {
    width: 100%;
  }
  
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
}
</style>

  