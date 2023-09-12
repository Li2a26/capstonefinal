<template>
        <div>
      <!-- <div v-if="users"> -->
        <div class="row table">
          <div class="col-12">
            <h1>Users</h1>
          </div>
          <div class="col">
            <table class="table is-striped is-bordered mt-2 is-fullwidth ">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Profile</th>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Email</th>
                  <th>Edit/Delete</th>
                  <th>View Profile</th>
                </tr>
              </thead>
              <tbody v-if="users">
                <UserTable :users="users"/>
              </tbody>
              <loading-spinner v-else />
            </table>
          </div>
        </div>
    </div>
    <!-- <div>
        <div v-if="users">
        <UserTable v-for="user of users" :key="user.userID" :user="user"/>
         
        </div>
        <loading-spinner v-else />
        <ProductTable/>
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
  
      mounted() {
          this.$store.dispatch("getUsers")
      },
      // mounted() {
      //     this.$store.dispatch("getproducts")
      // },
}
</script>
<style scoped>

</style>