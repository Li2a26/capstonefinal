<template>
        <div>
        <div class="row">
          <UserTable :users="users"/>
        </div>
        <div class="row">
          <ProductTable/>
        </div>
    </div>
    <!-- <div>
        <div v-if="users">
        <UserTable v-for="user of users" :key="user.userID" :user="user"/>
         
        </div>
        <loading-spinner v-else />
        
    </div> -->
    
</template>
<script>

import UserTable from '@/components/UserTable.vue'
import ProductTable from '@/components/ProductTable.vue';


export default {
    components: { ProductTable, UserTable },
    computed: {
          users() {
              return this.$store.state.users
          },
          // products() {
          //     return this.$store.state.products
          // }
          
      },
  
      // mounted() {
      //     this.$store.dispatch("getUsers")
      // },
      // mounted() {
      //     this.$store.dispatch("getproducts")
      // },
}
</script>
<style scoped>

</style>