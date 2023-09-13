<template>
  <div>
    <form @submit.prevent="addProduct">
      <div class="form-group">
        <label for="productName">Product Name</label>
        <input
          type="text"
          class="form-control"
          v-model="newProduct.productNAME"
          required
        />
      </div>
      <div class="form-group">
        <label for="productPrice">Product Price</label>
        <input
          type="number"
          class="form-control"
          v-model="newProduct.productPRICE"
          required
        />
      </div>
      <div class="form-group">
        <label for="productDesc">Product Description</label>
        <textarea
          class="form-control"
          v-model="newProduct.productDESC"
          required
        ></textarea>
      </div>
      <div class="form-group">
        <label for="productCAT">Product Category</label>
        <input
          type="text"
          class="form-control"
          v-model="newProduct.productCAT"
          required
        />
      </div>
      <div class="form-group">
        <label for="productType">Product Type</label>
        <input
          type="text"
          class="form-control"
          v-model="newProduct.productTYPE"
          required
        />
      </div>
     
      <div class="form-group">
        <label for="productQuantity">Product Quantity</label>
        <input
          type="number"
          class="form-control"
          v-model="newProduct.prodQUANTITY"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Add Product
      </button>
    </form>
    <div v-if="successMessage" class="alert alert-success">
      {{ successMessage }}
    </div>
    <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      newProduct: {
        productNAME: "",
        productPRICE: 0,
        productDESC: "",
        productCAT: "",
        productTYPE: "",
        productUrl: "",
        prodQUANTITY: 0,
      },
    };
  },
  computed: {
    successMessage() {
      return this.$store.state.succMsg;
    },
    errorMessage() {
      return this.$store.state.errMsg;
    },
  },
  mounted() {
    this.$store.dispatch("addProduct");
  },
  methods: {
    // async submitForm() {
    //   // const result = await this.$store.dispatch("addProduct", this.newProduct);
    //   // console.log(this.newProduct);
    //   if (result) {
    //     await Swal.fire({
    //       icon: "success",
    //       title: "Success",
    //       text: "Product added successfully",
    //     });
    //     window.location.reload();
    //     this.clearForm();
    //   } else {
    //     await Swal.fire({
    //       icon: "error",
    //       title: "Error",
    //       text: "Error adding product",
    //     });
    //   }
    // },
    addProduct(){
      return this.$store.dispatch("addProduct", this.newProduct)

    },
    clearForm() {
      // Clear the form fields
      this.newProduct = {
        productNAME: "",
        productPRICE: 0,
        productDESC: "",
        productCAT: "",
        productTYPE: "",
        productURL: "",
        // productQUANTITY: 0,
      };
    },
  },
};
</script>
<!-- <template lang="">
    <div>
      <div>
        <label class="label">Product Name</label>
                <input
                  class="input"
                  v-model="newProduct.productPRICE"
                  type="text"
                  placeholder="Product Name"
                  required
                />
                <label class="label">Quantity</label>
                <input
                  class="input"
                  v-model="newProduct.productNAME"
                  type="text"
                  placeholder="quantity"
                  required
                />
                <label class="label">Price</label>
                <input
                  class="input"
                  v-model="newProduct.productDESC"
                  type="number"
                  placeholder="R"
                  required
                />
                <label class="label">Category</label>
                <input
                  class="input"
                  v-model="newProduct.productCAT"
                  type="text"
                  placeholder="Name"
                  required
                />
                <label class="label">Type</label>
                <input
                  class="input"
                  v-model="newProduct.productTYPE"
                  type="text"
                  placeholder="http://"
                  required
                />
                <label class="label">Image</label>
                <input
                  class="input"
                  v-model="newProduct.productUrl"
                  type="text"
                  placeholder="http://"
                  required
                />
                <button
                  class="btn btn-success mt-3"
                  @click="addProduct"
                >
                  Add
                </button>
      </div>
    </div>
    </template>
    <script>
    
    import axios from 'axios'
    
    export default {
        data() {
            return {
              newProduct: {
                productPRICE: '',
                productName: '',
                productDESC: '',
                productCAT: '',
                productTYPE: '',
                productUrl: ''
              }
            }
        },
        methods: {
            // async addProduct(){
            //     try {
            //         await axios.post('https://lisambuwa.onrender.com/products', {
            //             productName: this.productName,
            //             quantity: this.quantity,
            //             amount: this.amount,
            //             category: this.category,
            //             productUrl: this.productUrl
            //         })
            //         this.productName = '';
            //         this.quantity = '';
            //         this.amount = '';
            //         this.category = '';
            //         this. productUrl = '';
            //         // this.$router.push('/admin')                
            //     } catch ( err ){
            //       // alert( 'Product added successfully!' )
            //       console.err
            //     }
            // }
            async addProduct() {
            try {
                await this.$store.dispatch("addProduct", this.newProduct);
                this.$router.push("/admin");
                this.newProduct = {
                    productPRICE: '',
                    productName: '',
                    productDESC: '',
                    productCAT: '',
                    productTYPE: '',
                    productUrl: ''
                };
                alert( 'Product added successfully');
                console.log("Product added successfully!")
            } catch (error) {
                console.error("Error adding product:", error);
            }
        }
        }
    };
    
    </script>
    <style lang="">
    
    </style> -->