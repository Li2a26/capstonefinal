<template>
    <div>
<!-- 
<div class="card">
  <div v-for="product in filteredProducts" :key="product.productID">
      <img :src="product.productUrl" alt="Product Image" class="product-image" />
        <h3>{{ product.productNAME }}</h3>
  <p> R {{ product.productPRICE }}</p>
  <p>{{ product.productCAT }}</p>
  <p>{{ product.productTYPE}}</p>

  <p>Quantity: {{ product.quantity }}</p>
    </div>
    
</div> -->
    <!-- Display filtered products -->
    

    <div v-if="products" class="d-flex justify-content-center">
        <CardComp :products="products" />
    </div>
    <!-- <loading-spinner v-else/> -->
  </div>

</template>
<script>

import LoadingSpinner from '@/components/LoadingSpinner.vue';
import CardComp from '@/components/CardComp.vue';
export default {

    data() {
    return {
      selectedCategory: "", // Holds the selected category
      filteredProducts: [], // Holds the filtered products
      categories: ["Bag", "Flag", "T-SHIRT",],
      searchQuery: "",
      sortOrder: "asc",
      isLoading: true,
    };
  },

    computed: {
        products() {
            return this.$store.state.products
            
        }
    },
    methods: {

    filter() {
      this.filteredProducts = this.products.filter(product => {
        return this.selectedCategory === "" || product.category === this.selectedCategory;
      });
    },

    performSearch() {
    this.filteredProducts = this.products.filter(product => {
      const productName = product.prodName.toLowerCase();
      return productName.includes(this.searchQuery.toLowerCase());
    });
  },
  sortProducts() {
    this.products.sort((a, b) => {
      if (this.sortOrder === "asc") {
        return a.amount - b.amount;
      } else {
        return b.amount - a.amount;
      }
    });

    // If products are currently being filtered, update the filteredProducts array
    if (this.selectedCategory || this.searchQuery) {
      this.filter();
    }
  }



  },

  mounted() {
    this.$store.dispatch("getProducts").then(() => {
      this.products = this.$store.state.products;
    });
  },
    components: {CardComp,  LoadingSpinner},
}
</script>
<style>

/* .cards {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
margin-left: 110px;
}

@media screen and (max-width: 700px) {
.cards {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
margin-left: 5px;
}
}

@media screen and (max-width: 300px) {
.cards {
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-template-rows: repeat(6, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
margin: 0px;
}
} */
</style>