
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
              <!-- <p>Quantity: {{ product.quantity }} In Stock</p> -->
              <button @click="addToCart(product)">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <loading-spinner v-else />
</template>

  <script>
  import Swal from 'sweetalert2';

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
        addToCart(product) {
      // Ensure the user is logged in
      // if (!this.userData.loggedIn) {
      //   // Handle the case where the user is not logged in
      //   Swal.fire({
      //     icon: 'error',
      //     title: 'Not Logged In',
      //     text: 'Please log in to add items to your cart.',
      //   });
      //   return;
      // }


      this.$store.dispatch('addToCart', product);
      Swal.fire({
        icon: "success",
        title: "Add to Cart",
        text: "Added to your cart.",
      })
    },
    getAllProductValues() {
      const cartItems = this.$store.state.cart;
      const allProductValues = [];
      cartItems.forEach((item) => {
        const product = {
          prodID: item.prodID,
          userID: userID,
        };
        allProductValues.push(product);
      });
      console.log("All Product Values:", allProductValues);
    },
  },
  async created() {
    const prodID = this.$route.params.prodID;
    try {
      await this.$store.dispatch("getProduct", prodID);
    } catch (error) {
      this.error = "Product not found";
    }
    },
    components: { LoadingSpinner },
  }
  </script>
<style scoped>


</style>