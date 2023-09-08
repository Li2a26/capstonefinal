<!--  <template>
  <div>
    <div class="oak col">
      <div class="container mx-auto">
        <div class="card my-4" id="body" v-if="products">
          <div v-for="product in products" :key="product.productID">
            <img
            :src="product.productUrl"
            :alt="product.productUrl"
            class="picture"
          />
            <div class="content">
              <h3 class="title">{{ product.productNAME }}</h3>
              <h3 class="title">{{ product.productCAT }}</h3>
              <h3 class="title">{{ product.productTYPE }}</h3>

              <p class="sci">R {{ product.productPRICE }}</p>
            </div>
            <router-link
              :to="{ name: 'product', params: { id: product.productID } }"
            >
              <button v-on:click="addToCart" class="viewbtn">View more</button>
              <button v-on:click="addToCart" class="addbtn">Add to cart</button>
            </router-link>
          </div>
        </div>
        <div v-else>Loading</div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  props: ["products"],
};
</script>
  <style>

@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=Nanum+Gothic&family=Playfair:ital,wght@1,300&family=Quicksand&family=Roboto:ital,wght@1,300&display=swap");
</style>
   
   <template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Search products..." />
    <button @click="sortProducts">Sort by Price</button>
    <button @click="sortProducts2">Sort by Price</button>

    <div class="row">
     
       
    </div>
    <div class="oak col">
      <div class="row">
        <div class="card-container" v-if="products">
       <div v-for="product in products"
            :key="product.productID"
            class="product-card"
          >
          
            <img
              :src="product.productUrl"
              :alt="product.productUrl"
              class="picture"
            />
            <div class="content">
              <h3 class="title">{{ product.productNAME }}</h3>
              <h3 class="title">{{ product.productCAT }}</h3>
              <h3 class="title">{{ product.productTYPE }}</h3>
              <p class="sci">R {{ product.productPRICE }}</p>
            </div>
            <router-link
              :to="{ name: 'product', params: { id: product.productID } }"
            >
              <button v-on:click="View" class="viewbtn">View more</button>
              <button v-on:click="addToCart" class="addbtn">Add to cart</button>
            </router-link>
          </div>
        </div>
        <div v-else>Loading</div>
      </div>
    </div>
  </div>
</template> -->
  <!-- <script>
export default {
  props: ["products"],
  data() {
    return {
      searchQuery: "",
      ascending: true,
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
      } else {
        filteredProducts.sort((a, b) => b.productPRICE - a.productPRICE);
      }
      if (this.decending) {
        filteredProducts.sort((b, a) => b.productPRICE - a.productPRICE);
      } else {
        filteredProducts.sort((b, a) => a.productPRICE - b.productPRICE);
      }

      return filteredProducts;
    },
  },
  methods: {
    sortProducts() {
      this.ascending = !this.ascending;
    },
    sortProducts2() {
      this.decending = !this.decending;
    },
  },
};
</script> -->
<template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Search products..." />
    <button @click="sortProducts">Sort by Price (Asc)</button>
    <button @click="sortProducts2">Sort by Price (Desc)</button>

    <div class="oak col">
      <div class="row">
        <div class="card-container" v-if="products">
          <div
            v-for="product in filteredAndSortedProducts"
            :key="product.productID"
            class="product-card"
          >
            <img :src="product.productUrl" :alt="product.productUrl" class="picture" />
            <div class="content">
              <h3 class="title">{{ product.productNAME }}</h3>
              <h3 class="title">{{ product.productCAT }}</h3>
              <h3 class="title">{{ product.productTYPE }}</h3>
              <p class="sci">R {{ product.productPRICE }}</p>
            </div>
            <router-link :to="{ name: 'product', params: { id: product.productID } }">
              <button @click="View" class="viewbtn">View more</button>
              <button @click="addToCart(product.productID)" class="addbtn">Add to cart</button>
            </router-link>
          </div>
        </div>
        <div v-else>Loading</div>
      </div>
    </div>
  </div>
</template>

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
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-card {
  margin-bottom: 20px; /* Add margin for spacing between cards */
  box-sizing: border-box;
  border: 1px solid #ddd;
  padding: 10px;
}
</style>

  <style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-card {
  margin-bottom: 20px; /* Add margin for spacing between cards */
  box-sizing: border-box;
  border: 1px solid #ddd;
  padding: 10px;
}
</style>
  