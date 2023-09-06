<template>
    <div>
      
    <input type="text" v-model="searchQuery" @input="performSearch" placeholder="Search products🔎" />
    <select v-model="selectedCategory" @change="filter">
      <option value="">All</option>
      <option v-for="category in categories" :key="category">{{ category }}</option>
    </select>
    <select v-model="sortOrder" @change="sortProducts">
      <option value="asc">Low to High</option>
      <option value="desc">High to Low</option>
    </select>



    <!-- Display filtered products -->
    <div v-for="product in filteredProducts" :key="product.productID">
      <img :src="product.productUrl" alt="Product Image" class="product-image" />
        <h3>{{ product.productNAME }}</h3>
  <p> R {{ product.productPRICE }}</p>
  <p>{{ product.productCAT }}</p>
  <p>{{ product.productTYPE}}</p>

  <p>Quantity: {{ product.quantity }}</p>
    </div>
    

    <div v-if="products" class="flex-container row row-cols-3">
        <CardComp :products="products" />
    </div>
    <!-- <loading-spinner v-else/> -->
  </div>

   <!-- <div>
    search
    <input type="text" v-model="searchQuery" @input="performSearch" placeholder="Search products🔎" />
    <div>

      sort by price
      <div>
        
      </div>

<select v-model="sortOrder" @change="sortProducts">
  <option value="asc">Low to High</option>
  <option value="desc">High to Low</option>
</select>
      filter by category
<select v-model="selectedCategory" @change="filter">
      <option value="">All</option>
      <option value="Necklaces">Necklaces</option>
      <option v-for="category in categories" :key="category">{{ category }}</option>
    </select>

    <div v-for="product in filteredProducts" :key="product.prodID">
        <img :src="product.prodUrl" alt="Product Image" class="product-image" />
        <h3>{{ product.prodName }}</h3>
  <p>Price: R {{ product.amount }}</p>
  <p>Quantity: {{ product.quantity }}</p>
  
    </div>
    </div>
<div v-if="products" class="flex-container row row-cols-3">
        <CardComp v-for="product of products" :key="product.prodID" :product="product" />
    </div>
    
        <div v-else class="loader"></div>
   </div> -->
</template>
<script>

// import LoadingSpinner from '@/components/LoadingSpinner.vue';
import CardComp from '@/components/CardComp.vue';
export default {

    data() {
    return {
      selectedCategory: "", // Holds the selected category
      filteredProducts: [], // Holds the filtered products
      categories: ["Necklace", "Watch", "Earrings", "Ring"],
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
    components: {CardComp, },
}
</script>
<style>

.cards {
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
}
</style>