<template>
  <div>
    <div class="body mx-3" v-if="users">
        <div class="row table-container " >
          <div class="col-12">
            <h1>USERS</h1>
            <button class="addu">
              <router-link to="/admin/add/user" class="bb"> Add User </router-link>
            </button>
          </div>
          <div class="col">
            <table class="table is-striped is-bordered mt-2 is-fullwidth  text-align-center" @submit="deleteuser" >
              <thead>
                <tr>
                  <th>#</th>
                  <th>IMAGE</th>
                  <th>NAME</th>
                  <th>SURNAME</th>
                  <th>EMAIL</th>
                  <th>ROLE</th>
                  <th>DELETE/EDIT</th>
                </tr>
              </thead>
           <tbody>   
        <tr  v-for="user in users" :key="user.userID" class="boredom" >
       <td>{{ user.userID }}</td>
       <td><img class="tableImg" :src="user.profileUrl" alt="" /></td>
       <td>{{ user.firstName }}</td>
       <td>{{ user.lastName }}</td>
       <td>{{ user.emailAdd }}</td>
       <td>{{ user.userRole }}</td>
       <td>
         <button    type="submit"
                      class="btn btton"
                      @click="deleteProduct(user.UserID)"
                      id="delete-row"
                    > 🗑️</button>
         <button    type="submit"
                      class="btn btton"
                      @click="editProduct(user.UserID)"
                      id="delete-row"
                    > ✏️</button>
       </td>
     </tr>
    </tbody>
    </table>
    </div>
    </div>
     </div>
  </div>
  </template>
  
  <script>
  
//   import axios from 'axios'
  
  import LoadingSpinner from '@/components/LoadingSpinner.vue';

  export default {
      props: ["users"],
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
    
      methods: {
  async deleteProduct(userID) {
    const success = await this.$store.dispatch('deleteuser', userID);

    if (success) {
      // Update the product list in your component if needed.
      this.$store.dispatch('getUsers'); // You can dispatch this if you need to refresh the product list.
    } else {
      alert('Failed to delete USER. Please try again.');
    }
  },
},
  
      // components: { LoadingSpinner},
  }
  </script>
  <style>
  
  .tableImg {
      width: 120px;
      height: auto;
  }
  .addu {
    background-color:#d914e7;
  border-radius: 20px; 
  color: black !important;
}
.addu:hover {
  background-color: pink;
}
.bb {
  color: black;
}
.btn {
 
  border-radius: 20px; 
}

  
  
  </style>