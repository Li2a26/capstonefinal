<template>
  <div>
    <tr  class="boredom" v-for="user in users" :key="user.userID">
       <td>{{ user.userID }}</td>
       <td><img class="tableImg" :src="user.userProfile" alt="" /></td>
       <td>{{ user.firstName }}</td>
       <td>{{ user.lastName }}</td>
       <td>{{ user.emailAdd }}</td>
       <td>{{ user.userRole }}</td>
       <td>
         <button>
           <!-- <router-link :to="{ name: 'admin edit user', params: { id : user.userID } }"> Edit </router-link> -->
         </button>
       </td>
       <td>
         <button>
           <!-- <router-link :to="{ name: 'user', params: { id: user.userID } }"> View </router-link> -->
         </button>
       </td>
     </tr>
  </div>
  </template>
  
  <script>
  
//   import axios from 'axios'
  
  import LoadingSpinner from '@/components/LoadingSpinner.vue';

  export default {
      props: ["users"],
    
  
  
      // components: { LoadingSpinner},
  }
  </script>
  <style>
  
  .tableImg {
      width: 120px;
      height: auto;
  }
  
  </style>