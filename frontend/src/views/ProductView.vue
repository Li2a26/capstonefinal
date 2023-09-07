
   <template>
  <div v-if="product" class="product_details" :key="product.productID" :product="product">
    <div class="card mx-auto" id="that">
      <div class="container text-center">
        <div class="row">
          <div class="col-sm-6 col-md-5 col-lg-6">
            <img class="image" :src="product.productUrl" :alt="product.productNAME" />
          </div>
          <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
            <p class="fs-4">{{ product.productNAME }}</p>
            <div class="card-body m-2">
              <p>{{ product.productDESC }}</p>
              <p>R {{ product.productPRICE }}</p>
              <p>Quantity: {{ product.quantity }} In Stock</p>
              <button @click="addToCart(product.productID)">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <loading-spinner v-else />
</template>

  <script>
  import LoadingSpinner from '@/components/LoadingSpinner.vue'
  
  export default {
    computed: {
      product() {
        return this.$store.state.product
      },
      id() {
        return this.$route.params.id
      },
      userData() {
      return this.$store.state.userData;
    },
    },
    mounted() {
      this.$store.dispatch("getProduct", this.id)
    },
    methods: {
        addToCart(prodID) {
      // Ensure the user is logged in
      if (this.userData && this.userData.userID) {
        // Call the addToCart action with userID and prodID
        this.$store.dispatch('addToCart', {
          userID: this.userData.userID,
          prodID,
        });
      } else {
        // Handle the case where the user is not logged in, prompt for login, etc.
      }
    },
    },
    components: { LoadingSpinner },
  }
  </script>
<style scoped>


</style>