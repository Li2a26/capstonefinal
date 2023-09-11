
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
    async addToCartProduct() {
  try {
    const userDataJSON = localStorage.getItem("userData");
    if (userDataJSON) {
      const userData = JSON.parse(userDataJSON);
      const userID = userData.result.userID;
      const product = {
        prodID: this.product.prodID,
        userID: userID,
      };
      const existingProductIndex = this.$store.state.cart.findIndex(
        (item) => item.prodID === product.prodID
      );
      if (existingProductIndex !== -1) {
        const existingProduct = this.$store.state.cart[existingProductIndex];
        await this.$store.dispatch("updateCartItem", {
          index: existingProductIndex,
          newQuantity: existingProduct.quantity + this.quantity,
        });
      } else {
        product.quantity = this.quantity;
        await this.$store.dispatch("addToCart", product);
      }
      await this.$store.dispatch("getCart");
      Swal.fire({
        icon: "success",
        title: "Added to Cart",
        text: "The product has been added to your cart.",
      });
    } else {
      console.error("User data not found in localStorage.");
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "An error occurred while adding the product to your cart.",
    });
  }
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